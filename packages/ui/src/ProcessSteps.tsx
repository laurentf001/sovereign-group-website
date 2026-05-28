interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

interface ProcessStepsProps {
  headline: string;
  steps: ProcessStep[];
}

export function ProcessSteps({ headline, steps }: ProcessStepsProps) {
  return (
    <div>
      <h2 className="t-headline mb-12 text-ivory">{headline}</h2>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((step) => (
          <article key={step.number} className="border-t border-gold/30 pt-8">
            <span className="t-label text-gold">{step.number}</span>
            <h3 className="mt-4 font-display text-2xl text-ivory">{step.title}</h3>
            <p className="t-body mt-4 text-steel">{step.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
