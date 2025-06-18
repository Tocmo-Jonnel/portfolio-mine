import { RevealOnScroll } from "../RevealOnScroll";

export const OjtDocuments = () => {
  const documents = [
    {
      name: "Video Resume",
      link: "https://drive.google.com/file/d/1bJSI3TKDAs5LeycxvMApFRhqTJ1A9lK-/view?usp=drive_link/preview",
    },
    {
      name: "My Resume/CV",
      link: "https://drive.google.com/file/d/1DfV5bWWNqhUs1RJBKe0m7FSAuvV5h5EN/view?usp=sharing/preview",
    },
    {
      name: "MOA",
      link: "https://drive.google.com/file/d/197_MVqP--AE8fJEg5xUz9tJp1kcw6XFc/view?usp=drivesdk/preview",
    },
    {
      name: "Daily Time Record",
      link: "https://docs.google.com/document/d/1WzphBby13Lqs6dhABSvToD-W_Oqvt9aR8aNobPkuQKA/edit?usp=sharing/preview",
    },
    {
      name: "Acceptance Letter and Consent Form",
      link: "https://drive.google.com/drive/folders/1IiiXXDVoMT8_O1TNFxqEmF0uyVNGxGbn?usp=drive_link/preview",
    },
    {
      name: "Weekly Accomplisment Report",
      link: "https://drive.google.com/drive/folders/1bH31bWdRjsJr04dbELGnM_q-tWCbLhR2?usp=drive_link/preview",
    },
    {
      name: "Certificate of Completion",
      link: "https://drive.google.com/file/d/1b8aN7n7gaEfCvGpTVyB2WglGuqzUjd4W/view?usp=drive_link/preview",
    },
    {
      name: "Evaluation From Proof",
      link: "https://drive.google.com/file/d/1b8kXF8sP96YDFnQ0FA1rf1u8wJOJAfsy/view?usp=drive_link/preview",
    },
  ];

  return (
    <section
      id="ojt"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            OJT Documents
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((doc, key) => (
              <div
                key={key}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex justify-between items-center"
              >
                <h3 className="text-xl font-bold">{doc.name}</h3>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4 whitespace-nowrap ml-4"
                >
                  View Document ➣
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};