import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import CompareSlider from "@/components/CompareSlider";
import DicomViewer from "@/components/DicomViewer";
import Badge from "@/components/Badge";
import { siteConfig } from "@/site.config";

export default function Demos() {
  return (
    <>
      <Helmet>
        <title>Interactive Demos - {siteConfig.name}</title>
        <meta name="description" content="Experience our GenAI technology with real-time chest X-ray, CT, and MRI enhancement demonstrations." />
      </Helmet>

      <Section 
        title="Interactive Demonstrations"
        subtitle="Experience our GenAI technology in action with real-time image enhancement comparisons."
        background="gradient"
        className="pt-32"
      >
        {/* Disclosure Banner */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-16 max-w-4xl mx-auto">
          <p className="text-yellow-200 text-sm text-center">
            <i className="fas fa-info-circle mr-2"></i>
            Demo assets are synthetically generated or de-identified; results are illustrative of technology capabilities.
          </p>
        </div>

        {/* X-Ray Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-8 text-center">
            X-Ray Super-Resolution
          </h3>
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <CompareSlider
              beforeSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
              afterSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
              beforeAlt="Original chest X-ray showing lung structures"
              afterAlt="Enhanced chest X-ray with super-resolution processing"
              modality="xray"
            />
          </div>
        </div>

        {/* CT Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-8 text-center">
            CT Super-Resolution
          </h3>
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <CompareSlider
              beforeSrc="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
              afterSrc="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80"
              beforeAlt="Original CT scan of thoracic cavity"
              afterAlt="Enhanced CT scan with improved resolution and clarity"
              modality="ct"
              controls={false}
            />
            <div className="text-center text-zinc-400 text-sm mt-4">
              Legacy 16-slice (2.5mm) → Enhanced 0.5mm equivalent slice thickness
            </div>
          </div>
        </div>

        {/* MRI Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-8 text-center">
            MRI Super-Resolution
          </h3>
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <CompareSlider
              beforeSrc="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80&sat=-100"
              afterSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80&sat=-100"
              beforeAlt="Original 1.5T MRI scan with standard resolution"
              afterAlt="Enhanced MRI with 3T/7T-equivalent detail and resolution"
              modality="mri"
              controls={false}
            />
            <div className="text-center text-zinc-400 text-sm mt-4">
              1.5T Fast Scan (5×5×5 mm) → 3T/7T-equivalent (0.5×0.5×0.5 mm)
            </div>
          </div>
        </div>

        {/* DICOM Viewer */}
        <div className="mb-16">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-8 text-center">
            DICOM Viewer
          </h3>
          <div className="glass-card p-8 rounded-xl">
            <DicomViewer />
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-dm-sans font-bold text-white mb-6 text-center">
            Performance Metrics
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30-60s</div>
              <div className="text-zinc-300 font-semibold mb-1">X-Ray Processing</div>
              <div className="text-zinc-500 text-sm">Typical enhancement time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2-5min</div>
              <div className="text-zinc-300 font-semibold mb-1">CT Processing</div>
              <div className="text-zinc-500 text-sm">Per volume enhancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3-8min</div>
              <div className="text-zinc-300 font-semibold mb-1">MRI Processing</div>
              <div className="text-zinc-500 text-sm">Per sequence enhancement</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
