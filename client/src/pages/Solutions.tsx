import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { siteConfig } from "@/site.config";
import solutions from "@/content/solutions.json";

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions - {siteConfig.name}</title>
        <meta name="description" content="Advanced medical imaging solutions for X-Ray, CT, MRI, and Digital Pathology. OEM-agnostic GenAI technology for healthcare providers." />
      </Helmet>

      {/* Hero */}
      <Section 
        title="Advanced Solutions for Every Modality"
        subtitle="Transform legacy imaging systems with cutting-edge GenAI technology. Upgrade image quality without hardware replacement."
        background="gradient"
        className="pt-32"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={<i className={`${solution.icon} text-primary text-xl`}></i>}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              href="/demos"
            />
          ))}
        </div>

        {/* Executive Context */}
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-4">Executive Context</h3>
          <p className="text-zinc-300 leading-relaxed">
            Medical imaging hardware advances rapidly, creating pressure on healthcare centers with 10–15 year equipment lifecycles. 
            Traditional OEM SaaS solutions present challenges including vendor lock-in and varying quality standards. Our OEM-agnostic 
            GenAI SaaS platform offers a transformative path to upgrade image quality without immediate capital expenditure, 
            enabling healthcare providers to deliver superior diagnostic capabilities while maximizing their existing infrastructure investments.
          </p>
        </div>
      </Section>
    </>
  );
}
