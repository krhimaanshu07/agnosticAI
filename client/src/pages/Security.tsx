import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import Badge from "@/components/Badge";
import { siteConfig } from "@/site.config";

export default function Security() {
  const certifications = [
    {
      icon: "fas fa-shield-alt",
      title: "HIPAA Ready",
      description: "Comprehensive HIPAA compliance framework with BAA availability, audit trails, and administrative safeguards.",
    },
    {
      icon: "fas fa-certificate",
      title: "SOC 2 Ready",
      description: "SOC 2 Type II compliance posture with security, availability, and confidentiality controls.",
    },
    {
      icon: "fas fa-globe-europe",
      title: "GDPR Compliant",
      description: "European data protection compliance with data portability, right to erasure, and consent management.",
    },
    {
      icon: "fas fa-lock",
      title: "End-to-End Encryption",
      description: "AES-256 encryption in transit and at rest. TLS 1.3 for all communications with perfect forward secrecy.",
    },
    {
      icon: "fas fa-server",
      title: "Data Residency",
      description: "Configurable data residency options with regional processing centers in US, EU, and APAC regions.",
    },
    {
      icon: "fas fa-key",
      title: "Access Controls",
      description: "Role-based access controls, multi-factor authentication, and comprehensive audit logging for all actions.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Security & Compliance - {siteConfig.name}</title>
        <meta name="description" content="Enterprise security and compliance standards for medical imaging. HIPAA, SOC 2, and GDPR ready with end-to-end encryption." />
      </Helmet>

      <Section 
        title="Enterprise Security & Compliance"
        subtitle="Built with healthcare-grade security and compliance standards. Protect patient data while leveraging cutting-edge AI technology."
        background="gradient"
        className="pt-32"
      >
        {/* Disclaimer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-16 max-w-4xl mx-auto">
          <p className="text-blue-200 text-sm text-center">
            <i className="fas fa-info-circle mr-2"></i>
            Security and compliance information shown for demonstration purposes only. Actual implementations require formal security assessments.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${cert.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-dm-sans font-bold text-white mb-4">
                {cert.title}
              </h3>
              <p className="text-zinc-300">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Security Features */}
        <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-6 text-center">
            Additional Security Features
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Infrastructure Security</h4>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Zero-trust network architecture
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Automated vulnerability scanning
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  24/7 security monitoring
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Incident response procedures
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Regular penetration testing
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Data Protection</h4>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Automated data anonymization
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Secure multi-tenant isolation
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Data encryption at rest and in transit
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Business Associate Agreement (BAA)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Comprehensive audit trails
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl text-center">
            <Badge variant="primary" size="lg" className="mb-4">
              HIPAA
            </Badge>
            <h4 className="text-lg font-semibold text-white mb-2">
              Health Insurance Portability and Accountability Act
            </h4>
            <p className="text-zinc-400 text-sm">
              US healthcare data protection standards with administrative, physical, and technical safeguards.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <Badge variant="primary" size="lg" className="mb-4">
              SOC 2
            </Badge>
            <h4 className="text-lg font-semibold text-white mb-2">
              Service Organization Control 2
            </h4>
            <p className="text-zinc-400 text-sm">
              Independent audit of security, availability, processing integrity, confidentiality, and privacy controls.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <Badge variant="primary" size="lg" className="mb-4">
              GDPR
            </Badge>
            <h4 className="text-lg font-semibold text-white mb-2">
              General Data Protection Regulation
            </h4>
            <p className="text-zinc-400 text-sm">
              European Union data protection and privacy regulation with data subject rights and consent management.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
