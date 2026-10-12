import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type Field =
  | { name: string; label: string; type: "text" | "tel" | "date"; required?: boolean }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean };

export const bridalFields: Field[] = [
  { name: "Name", label: "Name", type: "text", required: true },
  { name: "Phone", label: "Phone Number", type: "tel", required: true },
  { name: "Event Date", label: "Event Date", type: "date", required: true },
  { name: "Event Location", label: "Event Location", type: "text", required: true },
  { name: "Type of Makeup", label: "Type of Makeup", type: "select", required: true,
    options: ["Bridal Makeup", "HD Makeup", "Ultra HD Makeup", "Glossy Makeup", "Party Makeup", "Bridal Hair Styling", "Makeup Consultation"] },
  { name: "Message", label: "Message", type: "textarea" },
];

export const generalFields = (defaultInterest?: string): Field[] => [
  { name: "Full Name", label: "Full Name", type: "text", required: true },
  { name: "Phone", label: "Phone Number", type: "tel", required: true },
  { name: "Interested In", label: "Interested In", type: "select", required: true,
    options: defaultInterest
      ? [defaultInterest, ...["Bridal Makeup", "Hair Course", "Skin Course", "Makeup Course", "Other"].filter((o) => o !== defaultInterest)]
      : ["Bridal Makeup", "Hair Course", "Skin Course", "Makeup Course", "Other"] },
  { name: "Preferred Date", label: "Preferred Date (optional)", type: "date" },
  { name: "Message", label: "Message", type: "textarea" },
];

export function validatePhone(v: string) {
  return /^(\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, ""));
}

export function EnquiryForm({ fields, title, intro }: { fields: Field[]; title: string; intro: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = String(data.get(f.name) ?? "").trim();
      if (f.required && !v) next[f.name] = `Please enter ${f.label.toLowerCase()}.`;
      else if (f.type === "tel" && v && !validatePhone(v)) next[f.name] = "Please enter a valid 10-digit mobile number.";
    }
    setErrors(next);
    if (Object.keys(next).length) { setStatus(null); return; }
    const lines = fields
      .map((f) => [f.name, String(data.get(f.name) ?? "").trim()] as const)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`);
    const msg = `Hello Makris Makeover Artistry, I'd like to make an enquiry.\n\n${lines.join("\n")}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
    setStatus("WhatsApp has opened with your details — please press send there to reach us.");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-gold/40 bg-card p-6 shadow-soft md:p-10">
      <h3 className="text-3xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{intro}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fields.map((f) => {
          const id = `f-${f.name.replace(/\s/g, "-")}`;
          const err = errors[f.name];
          const common = { id, name: f.name, "aria-invalid": !!err, "aria-describedby": err ? `${id}-err` : undefined, className: "field" };
          return (
            <div key={f.name} className={f.type === "textarea" ? "md:col-span-2" : ""}>
              <label htmlFor={id} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-wine">
                {f.label}{f.required && " *"}
              </label>
              {f.type === "select" ? (
                <select {...common} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {f.options.map((o) => <option key={o}>{o}</option>)}
                </select>
              ) : f.type === "textarea" ? (
                <textarea {...common} rows={4} />
              ) : (
                <input {...common} type={f.type} />
              )}
              {err && <p id={`${id}-err`} className="mt-1 text-xs text-destructive">{err}</p>}
            </div>
          );
        })}
      </div>
      <button type="submit" className="btn-ruby mt-6 w-full md:w-auto">
        <MessageCircle className="h-4 w-4" /> Send Enquiry via WhatsApp
      </button>
    
      {status && <p role="status" className="mt-3 rounded-md bg-blush px-4 py-3 text-sm text-wine">{status}</p>}
    </form>
  );
}
