import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Badge from "@/components/Badge";
import { siteConfig } from "@/site.config";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Pay-Per-Use",
      price: 12,
      period: "per study",
      description: "Perfect for small practices and pilot programs",
      features: [
        "All imaging modalities",
        "Super-resolution enhancement",
        "Basic API access",
        "Email support",
        "HIPAA compliance",
      ],
      cta: "Get Started",
      ctaVariant: "outline" as const,
    },
    {
      name: "Clinical",
      price: 8,
      period: "per study",
      description: "Most popular for healthcare organizations",
      features: [
        "Everything in Pay-Per-Use",
        "Volume discounts",
        "SSO integration",
        "Audit logs",
        "Priority support",
        "Custom DICOM routing",
      ],
      cta: "Start Trial",
      ctaVariant: "primary" as const,
      popular: true,
      note: "with 1000+ studies/month",
    },
    {
      name: "Enterprise/OEM",
      price: "Custom",
      period: "pricing",
      description: "Tailored for large health systems and OEMs",
      features: [
        "Everything in Clinical",
        "On-premises deployment",
        "Hybrid cloud options",
        "Custom SLAs",
        "PHI segmentation",
        "White-label options",
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
    },
  ];

  const faqs = [
    {
      question: "What is the typical processing latency?",
      answer: "Processing times vary by modality and image size. Typical ranges: X-Ray (30-60 seconds), CT (2-5 minutes), MRI (3-8 minutes). Enterprise deployments can achieve faster processing with dedicated resources.",
    },
    {
      question: "How does PACS integration work?",
      answer: "We support standard DICOM protocols and can integrate with major PACS systems including Epic, Cerner, GE Centricity, and Philips IntelliSpace. Our Edge Connector handles secure routing and maintains DICOM metadata integrity.",
    },
    {
      question: "Which OEM systems are supported?",
      answer: "Our OEM-agnostic approach supports imaging systems from all major manufacturers including GE Healthcare, Siemens Healthineers, Philips Healthcare, Canon Medical, Hologic, and legacy systems. Our harmonization algorithms ensure consistent quality across vendors.",
    },
    {
      question: "What security certifications do you have?",
      answer: "We maintain HIPAA readiness with BAA availability, SOC 2 Type II compliance posture, GDPR compliance for European operations, and comprehensive security controls including end-to-end encryption and access logging.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - {siteConfig.name}</title>
        <meta name="description" content="Flexible pricing plans for medical imaging GenAI. Pay-per-use, clinical, and enterprise options available." />
      </Helmet>

      <Section 
        title="Flexible Pricing Plans"
        subtitle="Choose the plan that fits your healthcare organization's needs. Scale from per-study pricing to enterprise deployments."
        background="black"
        className="pt-32"
      >
        {/* Pricing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="glass-card p-2 rounded-lg">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  !isAnnual ? "bg-primary text-primary-foreground" : "text-zinc-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  isAnnual ? "bg-primary text-primary-foreground" : "text-zinc-300"
                }`}
              >
                Annual
              </button>
            </div>
          </div>
          {isAnnual && (
            <Badge variant="primary" className="ml-4">
              Save 20%
            </Badge>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-xl relative ${
                plan.popular ? "border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-dm-sans font-bold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  ${plan.price}
                </div>
                <div className="text-zinc-400">{plan.period}</div>
                {plan.note && (
                  <div className="text-sm text-zinc-500 mt-1">{plan.note}</div>
                )}
                <p className="text-zinc-300 text-sm mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <i className="fas fa-check text-primary mr-3"></i>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.ctaVariant}
                className="w-full"
                data-testid={`pricing-cta-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {plan.cta === "Contact Sales" ? (
                  <Link to="/contact">{plan.cta}</Link>
                ) : (
                  <Link to="/contact">{plan.cta}</Link>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-zinc-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 glass-card p-12 rounded-xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-4">
            Need Custom Enterprise Pricing?
          </h3>
          <p className="text-zinc-300 mb-8">
            Contact our sales team to discuss volume discounts, on-premises deployment, and white-label options.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">
              <i className="fas fa-phone mr-2"></i>
              Contact Enterprise Sales
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
