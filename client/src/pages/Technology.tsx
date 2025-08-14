import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import { siteConfig } from "@/site.config";

export default function Technology() {
  const [activeTab, setActiveTab] = useState("pipeline");

  const technologies = [
    {
      icon: "fas fa-robot",
      title: "Generative AI",
      description: "Deep Neural Networks combined with adversarial learning for superior image enhancement and super-resolution capabilities.",
    },
    {
      icon: "fas fa-atom",
      title: "Physics-Informed Loss",
      description: "Respects modality-specific constraints and physical principles to ensure clinically accurate results.",
    },
    {
      icon: "fas fa-network-wired",
      title: "OEM-Agnostic Training",
      description: "Harmonization algorithms ensure consistent performance across different imaging equipment manufacturers.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Uncertainty Maps & QA",
      description: "Built-in quality assurance with uncertainty quantification and automated QA overlay generation.",
    },
  ];

  const pipelineSteps = [
    { icon: "fas fa-upload", title: "Input", description: "DICOM/Raw Image" },
    { icon: "fas fa-filter", title: "Denoise", description: "Noise Reduction" },
    { icon: "fas fa-eye", title: "Deblur", description: "Sharpness Enhancement" },
    { icon: "fas fa-expand-arrows-alt", title: "Super-Resolution", description: "Resolution Enhancement" },
    { icon: "fas fa-balance-scale", title: "Harmonize", description: "Cross-OEM Standardization" },
    { icon: "fas fa-check", title: "Enhanced Output", description: "Clinical-Ready Image" },
  ];

  return (
    <>
      <Helmet>
        <title>Technology - {siteConfig.name}</title>
        <meta name="description" content="Cutting-edge GenAI technology for medical imaging. Physics-informed neural networks with OEM-agnostic training." />
      </Helmet>

      <Section 
        title="Cutting-Edge Technology Stack"
        subtitle="Our approach combines deep neural networks with physics-informed constraints to deliver clinically validated results."
        background="black"
        className="pt-32"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Technology Approach */}
          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${tech.icon} text-primary`}></i>
                  </div>
                  <h3 className="text-xl font-dm-sans font-bold text-white">{tech.title}</h3>
                </div>
                <p className="text-zinc-300">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* Pipeline Diagram */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-dm-sans font-bold text-white mb-6 text-center">Processing Pipeline</h3>
            <div className="flex flex-col space-y-4">
              {pipelineSteps.map((step, index) => (
                <div key={index}>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                      index === pipelineSteps.length - 1 ? "bg-primary/20" : "bg-zinc-800"
                    }`}>
                      <i className={`${step.icon} ${
                        index === pipelineSteps.length - 1 ? "text-primary" : "text-primary"
                      }`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{step.title}</div>
                      <div className="text-sm text-zinc-400 font-mono">{step.description}</div>
                    </div>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="flex items-center justify-center mt-2 mb-2">
                      <i className="fas fa-arrow-down text-primary"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-6">Technical Implementation</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">AI Architecture</h4>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Transformer-based encoder-decoder networks
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Generative adversarial network training
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Multi-scale feature extraction
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Attention mechanisms for detail preservation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Quality Assurance</h4>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Automated quality metrics computation
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Uncertainty quantification maps
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Clinical validation frameworks
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-primary mr-3 text-sm"></i>
                  Radiologist feedback integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
