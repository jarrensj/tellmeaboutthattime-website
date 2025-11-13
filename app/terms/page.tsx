export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="grain-overlay"></div>
      
      <main className="flex-1 px-6 py-12 relative z-10">
        <article className="max-w-3xl mx-auto prose">
          <div className="mb-8">
            <a href="/" className="text-sm text-muted hover:text-foreground transition-colors">
              ← Back to Home
            </a>
          </div>
          
          <h1>Terms of Service</h1>
          
          <p><em>Last Updated: November 8, 2025</em></p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using tellmeaboutthattime ("the App"), you accept and agree to be bound by the terms 
            and provision of this agreement. If you do not agree to these Terms of Service, please do not use the App.
          </p>
          
          <h2>2. Description of Service</h2>
          <p>
            tellmeaboutthattime is a storytelling game application designed to help users become closer to their 
            friends, loved ones, or coworkers through shared storytelling experiences.
          </p>
          
          <h2>3. User Accounts</h2>
          <p>
            You may be required to create an account to use certain features of the App. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
          </ul>
          
          <h2>4. User Content</h2>
          <p>
            You retain all rights to the stories and content you create through the App. By using the App, you grant 
            us a limited license to store and display your content solely for the purpose of providing the service.
          </p>
          
          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the App to:</p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Post offensive, inappropriate, or harmful content</li>
            <li>Attempt to gain unauthorized access to the App or related systems</li>
            <li>Interfere with the proper functioning of the App</li>
          </ul>
          
          <h2>6. Intellectual Property</h2>
          <p>
            The App and its original content, features, and functionality are owned by tellmeaboutthattime and are 
            protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access to the App immediately, without 
            prior notice or liability, for any reason, including breach of these Terms.
          </p>
          
          <h2>8. Limitation of Liability</h2>
          <p>
            In no event shall tellmeaboutthattime, its directors, employees, partners, agents, suppliers, or affiliates 
            be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use 
            of the App.
          </p>
          
          <h2>9. Disclaimer</h2>
          <p>
            The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express 
            or implied, including but not limited to implied warranties of merchantability, fitness for a particular 
            purpose, or non-infringement.
          </p>
          
          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes 
            by posting the new Terms on this page and updating the "Last Updated" date.
          </p>
          
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without 
            regard to its conflict of law provisions.
          </p>
          
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a href="mailto:contact@tellmeaboutthattime.com">contact@tellmeaboutthattime.com</a>
          </p>
        </article>
      </main>
      
      <footer className="relative z-10 py-6 px-6 text-center">
        <p className="text-sm text-muted">
          <a 
            href="/terms" 
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </a>
          {" • "}
          <a 
            href="/privacy" 
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          {" • "}
          <a 
            href="mailto:contact@tellmeaboutthattime.com" 
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}

