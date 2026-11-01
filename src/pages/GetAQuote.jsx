import React, { useState } from 'react';
import CostEstimator from '../components/CostEstimator';
import QuoteForm from '../components/QuoteForm';
import { siteConfig, getWhatsAppLink, getPhoneLink } from '../config/siteConfig';

/**
 * ============================================================================
 * GET A QUOTE PAGE
 * ============================================================================
 *
 * Student / Developer Guide:
 * This page houses two major interactive planning tools:
 * 1. Swimming Pool Cost Estimator:
 *    Calculates approximate pool water volume (m³), water capacity in litres,
 *    and indicative civil construction costs in ₹ based on plot dimensions.
 *    Clicking "Request Official Quote With These Dimensions" passes the calculated
 *    measurements into the Quote Form below.
 *
 * 2. Free Quote Inquiry Form:
 *    Allows customers to submit project requirements with inline form validation.
 *    On submit, generates a prefilled WhatsApp inquiry message directed to the
 *    Poona Pools Facilities team.
 *
 * Both components are modular and share state seamlessly via `estimatorPrefill`.
 * ============================================================================
 */
export default function GetAQuote() {
  // Shared state: holds dimensions transferred from CostEstimator to QuoteForm
  const [estimatorPrefill, setEstimatorPrefill] = useState(null);

  return (
    <div className="get-a-quote-page">
      {/* 1. Page Header / Hero Banner */}
      <section className="bg-light-blue py-5 border-bottom border-light" aria-labelledby="get-a-quote-heading">
        <div className="container py-4 text-center">
          <span className="section-subtitle-badge">Custom Project Estimation</span>
          <h1 id="get-a-quote-heading" className="display-5 fw-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Plan Your Swimming Pool Project
          </h1>
          <div className="section-divider mx-auto" />
          <p className="lead text-secondary mx-auto mb-4" style={{ maxWidth: '760px' }}>
            Estimate your pool water volume, capacity, and indicative civil construction cost with our interactive calculator, or submit your project details below to request a tailored quote.
          </p>

          {/* Quick-jump Anchor Links */}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="#estimator"
              className="btn btn-outline-primary fw-semibold px-4 py-2 rounded-pill shadow-sm"
              style={{ fontSize: '0.925rem' }}
            >
              <span className="me-1">&#8595;</span> Cost &amp; Capacity Estimator
            </a>
            <a
              href="#quote-form"
              className="btn btn-primary fw-semibold px-4 py-2 rounded-pill shadow-sm"
              style={{
                fontSize: '0.925rem',
                backgroundColor: 'var(--color-primary-blue)',
                borderColor: 'var(--color-primary-blue)'
              }}
            >
              <span className="me-1">&#8595;</span> Free Quote Inquiry Form
            </a>
          </div>
        </div>
      </section>

      {/* 2. Swimming Pool Cost Estimator Section */}
      <CostEstimator onUseDimensions={setEstimatorPrefill} />

      {/* 3. Request a Free Quote Inquiry Form Section */}
      <QuoteForm prefilledData={estimatorPrefill} />

      {/* 4. Direct Contact & Consultation Call-To-Action */}
      <section className="section-padding-sm bg-white border-top" aria-labelledby="quote-cta-heading">
        <div className="container">
          <div className="cta-banner">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="badge bg-info text-dark mb-2 px-3 py-2 fw-semibold">
                  Personalized Assistance
                </span>
                <h2 id="quote-cta-heading" className="cta-title">
                  Prefer an On-Site Consultation?
                </h2>
                <p className="cta-text">
                  Our civil engineers and filtration experts can visit your property in Pune to inspect ground feasibility, soil conditions, and municipal clearances.
                </p>
              </div>

              <div className="col-lg-4 text-lg-end">
                <div className="d-flex flex-column flex-sm-row flex-lg-column gap-3 justify-content-lg-end">
                  <a
                    href={getWhatsAppLink('Hello Poona Pools Facilities, I would like to schedule an on-site consultation for my swimming pool project.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-custom"
                  >
                    <span>Chat on WhatsApp</span>
                  </a>

                  <a
                    href={getPhoneLink()}
                    className="btn-outline-light-custom"
                  >
                    <span>Call: {siteConfig.contact.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
