import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-foreground mb-8 gold-accent-line inline-block" data-testid="heading-privacy-title">
            Privacy Policy
          </h1>

          <div className="prose max-w-none space-y-8 mt-12">
            <div className="professional-card p-8">
              <p className="text-sm text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8" data-testid="section-introduction">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to Casino Quest Book. This Privacy Policy explains how Leona Drummond ("we," "us," or "our") collects, uses, and protects your personal information when you use our mobile application.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By using Casino Quest Book, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="mb-8" data-testid="section-information-collection">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-muted-foreground mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile information</li>
                  <li>Game progress and statistics</li>
                </ul>

                <h3 className="text-xl font-semibold text-muted-foreground mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you use Casino Quest Book, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Device information (model, operating system)</li>
                  <li>Usage data and analytics</li>
                  <li>IP address</li>
                  <li>App interactions and gameplay data</li>
                </ul>
              </section>

              <section className="mb-8" data-testid="section-information-use">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className="mb-8" data-testid="section-data-security">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your data is important to us. We strive to use commercially acceptable means to protect your personal information, but remember that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8" data-testid="section-third-party">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, perform service-related services, or assist us in analyzing how our service is used.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section className="mb-8" data-testid="section-children-privacy">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our service is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-8" data-testid="section-changes">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                </p>
              </section>

              <section data-testid="section-contact-info">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-background/50 rounded-lg p-4">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a href="mailto:leonadrum2@hotmail.com" className="text-foreground hover:text-muted-foreground transition-colors">
                      leonadrum2@hotmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    <strong className="text-foreground">Developer:</strong> Leona Drummond
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
