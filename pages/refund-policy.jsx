import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Footer from '../src/sections/Footer';

export default function RefundPolicyPage() {
  return (
    <>
      <Head>
        <title>Refund Policy — 100XAI</title>
        <meta name="description" content="100XAI refund policy: our prepaid engagement model, termination terms, and refund window." />
      </Head>

      <Navbar />

      <main className="legal">
        <div className="container legal-inner">
          <div className="legal-tag">Legal</div>
          <h1 className="legal-title">Refund Policy</h1>
          <p className="legal-updated">Last updated: 3 March 2026</p>

          <p className="legal-lead">
            100XAI operates on a <strong>prepaid engagement model</strong>. When you
            engage us, your payment reserves and covers the tools, resources, and
            time we allocate to your project — costs that are committed the moment
            work begins.
          </p>

          <section className="legal-section">
            <h2>1. Prepaid model &amp; expenses</h2>
            <p>
              Our services are billed upfront. The fee covers the tools, resources,
              and time expenses incurred in delivering your project. As these costs
              are committed on your behalf from day one, we are not obliged to share
              or provide an itemised breakdown of these expenses.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Termination of the agreement / MoU</h2>
            <p>
              If you are not satisfied with our services, the agreement / Memorandum
              of Understanding (MoU) will be treated as terminated. Termination
              releases both parties from any further obligations under the agreement,
              save for those set out in this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Refund window</h2>
            <p>
              <strong>No refund will be issued after 15 days of service.</strong> Any
              refund request must be raised within the first 15 days from the
              commencement of service; requests made after this period will not be
              entertained.
            </p>
          </section>

          <section className="legal-section">
            <h2>Questions</h2>
            <p>
              For any questions about this policy, contact us at{' '}
              <a href="mailto:hello@100xai.co">hello@100xai.co</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
