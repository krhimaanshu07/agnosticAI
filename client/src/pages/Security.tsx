import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import { siteConfig } from "@/site.config";

export default function Security() {
  return (
    <>
      <Helmet>
        <title>Security & Compliance - {siteConfig.name}</title>
        <meta name="description" content="Data Protection & Compliance for medical imaging AI. CDSCO pathway compliance, Indian cloud governance, and ABDM readiness." />
      </Helmet>

      <Section 
        title="Data Protection & Compliance"
        subtitle="Regulatory & Data Safeguards"
        background="gradient"
        className="pt-32"
      >
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="glass-card p-12 rounded-xl">
            <div className="space-y-8">
              {/* CDSCO Pathway */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-dm-sans font-bold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  CDSCO pathway
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    Clinical evaluation plan
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    Ethics approvals per site
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    PMS for safety/efficacy
                  </li>
                </ul>
              </div>

              {/* Data Governance */}
              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-dm-sans font-bold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                  Data governance
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    Indian cloud
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    Encryption in transit/at rest
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    Role-based access
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">•</span>
                    Immutable audit trails
                  </li>
                </ul>
              </div>

              {/* ABDM Readiness */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-dm-sans font-bold text-foreground mb-4 flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                  ABDM readiness
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    Standards-based output
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    Consent-driven sharing
                  </li>
                </ul>
              </div>

              {/* Compliance Statement */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-lg p-6 mt-8">
                <p className="text-foreground text-center font-medium">
                  We will align with MoHFW guidance and state IEC requirements at each pilot site
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
