import { createServerFn } from "@tanstack/react-start";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const chatWithAssistant = createServerFn({ method: "POST" })
  .inputValidator((data: { messages: ChatMessage[] }) => {
    if (!data || !Array.isArray(data.messages)) throw new Error("messages required");
    if (data.messages.length > 30) throw new Error("trop de messages");
    for (const m of data.messages) {
      if (!["user", "assistant", "system"].includes(m.role)) throw new Error("rôle invalide");
      if (typeof m.content !== "string" || m.content.length > 2000) throw new Error("contenu invalide");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("LOVABLE_API_KEY non configurée");

    const systemPrompt = `Tu es l'assistant virtuel de C3F Conseils, cabinet d'expertise comptable basé à Toulon (Var, 83).

Ta mission : répondre de façon claire, professionnelle et chaleureuse aux questions des visiteurs sur :
- Les expertises du cabinet (comptabilité, fiscalité, paie, création d'entreprise, conseil)
- Les honoraires (forfaits Essentiel 89€/mois, Performance 189€/mois, Sur-mesure)
- La prise de rendez-vous (premier RDV gratuit, en cabinet à Toulon ou en visio)
- Les coordonnées (contact@c3f-conseils.fr, horaires lun-ven 9h-12h30 / 14h-18h)

Règles :
- Réponses courtes (2-4 phrases max), en français, ton professionnel mais accessible
- Si question hors-sujet ou trop technique : invite à contacter le cabinet
- Ne jamais inventer de chiffres précis (numéro SIRET, tarifs détaillés, noms de collaborateurs)
- Toujours proposer en fin de réponse une action concrète (RDV, contact, page à consulter)`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: systemPrompt }, ...data.messages],
      }),
    });

    if (response.status === 429) {
      return { reply: "Trop de demandes pour le moment, merci de réessayer dans quelques instants." };
    }
    if (response.status === 402) {
      return { reply: "Le service est temporairement indisponible. Contactez-nous directement à contact@c3f-conseils.fr." };
    }
    if (!response.ok) {
      const text = await response.text();
      console.error("AI gateway error", response.status, text);
      throw new Error("Erreur AI gateway");
    }

    const json = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
    const reply = json.choices?.[0]?.message?.content ?? "Je n'ai pas pu générer de réponse, désolé.";
    return { reply };
  });
