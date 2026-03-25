import { useState, type SubmitEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ContactSection() {
  const [form, setForm] = useState({
    email: "",
    subject: "",
    html: "",
  });

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setForm({ email: "", subject: "", html: "" });
        toast.success("Message envoyé");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast.error(
        "Oups ! Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  };
  return (
    <section
      className="px-6 py-10 md:px-20 lg:px-10 xl:px-32 sm:py-20 bg-white/30"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 lg:mb-6">
            Collaborons ensemble.
          </h2>
          <p className="text-lg text-slate-600 mb-6 lg:mb-12">
            Je suis actuellement disponible pour des missions freelance ou des
            opportunités à temps plein. N'hésitez pas à me contacter en
            discuter.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start gap-5">
            <InfoRow
              icon="alternate_email"
              label="Email"
              value="alice.zheng@epitech.eu"
              type="email"
            />
            <InfoRow
              icon="message"
              label="Whatsapp"
              value="Réponse rapide"
              type="whatsapp"
            />
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 ">
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
            <Field label="Email">
              <input
                className="w-full bg-slate-50  border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                placeholder="john@example.com"
                type="email"
                required
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                value={form.email}
              />
            </Field>

            <Field label="Objet">
              <input
                className="w-full bg-slate-50  border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 transition-all"
                type="text"
                required
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                value={form.subject}
              />
            </Field>

            <Field label="Message">
              <textarea
                className="w-full bg-slate-50  border-none rounded-lg focus:ring-2 focus:ring-primary py-3 px-4 transition-all resize-none"
                rows={4}
                required
                onChange={(e) => setForm({ ...form, html: e.target.value })}
                value={form.html}
              />
            </Field>

            <button className="w-full bg-primary cursor-pointer py-4 rounded-lg font-bold hover:scale-[1.03] transition-all flex items-center justify-center gap-2">
              Envoyer <span className="material-icons">send</span>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  type,
}: {
  icon: string;
  label: string;
  value: string;
  type?: "email" | "whatsapp" | "text";
}) {
  return (
    <div className="flex flex-col items-start gap-2 bg-slate-50 py-3.5 px-6 rounded-2xl hover:bg-[#D1E4FD] w-full">
      <span className="material-icons">{icon}</span>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          {label}
        </p>

        {type === "email" && (
          <div className="flex flex-col gap-1">
            <a href={`mailto:${value}`} className="text-lg font-medium">
              {value}
            </a>
            <a
              href={`mailto:${value}`}
              className="mt-4 bg-primary rounded hover:bg-primary/90 transition-all font-bold relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-6 mb-5 w-fit"
            >
              Envoyez moi un e-mail{" "}
              <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
        )}

        {type === "whatsapp" && (
          <div className="flex flex-col gap-1">
            <a
              href="https://wa.me/33652422142"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium"
            >
              {value}
            </a>
            <a
              href="https://wa.me/33652422142"
              className="mt-4 bg-primary rounded hover:bg-primary/90 transition-all font-bold relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-6 mb-5 w-fit"
            >
              Discuter sur WhatsApp
              <span className="material-icons text-sm">arrow_forward</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase text-slate-400">
        {label}
      </label>
      {children}
    </div>
  );
}
