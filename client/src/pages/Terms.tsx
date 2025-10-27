import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold text-foreground  mb-8" data-testid="heading-terms-title">
            Terms of Service
          </h1>

          <div className="prose prose max-w-none space-y-8">
            <div className="professional-card p-8">
              <p className="text-sm text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-8" data-testid="section-agreement">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Leona Drummond ("we," "us" or "our"), concerning your access to and use of the Casino Quest Book mobile application.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Casino Quest Book, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the app and you must discontinue use immediately.
                </p>
              </section>

              <section className="mb-8" data-testid="section-intellectual-property">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless otherwise indicated, Casino Quest Book is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the application (collectively, the "Content") are owned or controlled by us or licensed to us.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Content is protected by copyright and trademark laws. Except as expressly provided in these Terms of Service, no part of the application and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </section>

              <section className="mb-8" data-testid="section-user-representations">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">User Representations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using Casino Quest Book, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                  <li>You are not under the age of 13</li>
                  <li>You will not access the application through automated or non-human means</li>
                  <li>You will not use the application for any illegal or unauthorized purpose</li>
                  <li>Your use of the application will not violate any applicable law or regulation</li>
                </ul>
              </section>

              <section className="mb-8" data-testid="section-prohibited-activities">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not access or use the application for any purpose other than that for which we make the application available. Prohibited activities include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Systematically retrieve data or other content from the application to create a collection, compilation, database, or directory</li>
                  <li>Make any unauthorized use of the application, including collecting usernames and/or email addresses</li>
                  <li>Use the application to advertise or offer to sell goods and services</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the application</li>
                  <li>Engage in unauthorized framing of or linking to the application</li>
                  <li>Trick, defraud, or mislead us and other users</li>
                  <li>Use any information obtained from the application in order to harass, abuse, or harm another person</li>
                  <li>Attempt to bypass any measures of the application designed to prevent or restrict access</li>
                </ul>
              </section>

              <section className="mb-8" data-testid="section-in-app-purchases">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">In-App Purchases</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Casino Quest Book may offer in-app purchases for virtual items, currency, or other digital content. All purchases are final and non-refundable, except as required by law.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pricing for in-app purchases may change at any time, and we reserve the right to modify or discontinue any virtual items or content at our discretion.
                </p>
              </section>

              <section className="mb-8" data-testid="section-limitation-liability">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the application.
                </p>
              </section>

              <section className="mb-8" data-testid="section-modifications">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Modifications and Interruptions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to change, modify, or remove the contents of the application at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the application without notice at any time.
                </p>
              </section>

              <section className="mb-8" data-testid="section-governing-law">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and defined following the laws of the jurisdiction in which Leona Drummond operates. Casino Quest Book and yourself irrevocably consent that the courts shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </section>

              <section data-testid="section-contact-info">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
