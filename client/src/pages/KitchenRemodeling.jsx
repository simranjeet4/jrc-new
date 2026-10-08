import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import { COMPANY } from '../content/siteData';
import '../styles/kitchen.css';

const FORM_ID = 'v8yeCev0amqIMAJD1CZW';
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
const FORM_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

const heroChips = [
  'Custom Designs',
  'Quality Craftsmanship',
  'On Time & Budget',
  'Licensed & Insured'
];

const trustBar = [
  '5-Star Rated',
  'Fully Licensed',
  'On-Time Guarantee',
  '100% Satisfaction',
  'Flexible Financing'
];

const kitchenVideos = [
  {
    key: 'transformation',
    kind: 'vimeo',
    id: '1191086232',
    hash: '3a848937e8',
    title: 'Kitchen Transformation',
    caption: 'A complete kitchen renovation from start to finish'
  },
  {
    key: 'reveal',
    kind: 'vimeo',
    id: '1191086204',
    hash: 'd24aa130ec',
    title: 'Before & After Reveal',
    caption: 'Dramatic transformation of a Colorado kitchen'
  },
  {
    key: 'tour',
    kind: 'youtube',
    id: 'qYmNisQRqJY',
    title: 'Quick Kitchen Tour',
    caption: 'See our work in 60 seconds'
  }
];

const kitchenServices = [
  {
    title: 'Custom Kitchen Design',
    desc: 'Personalized layouts and 3D renderings designed around your lifestyle and budget.',
    icon: '▦'
  },
  {
    title: 'Cabinet Installation',
    desc: 'Premium cabinetry, refacing, and installation with soft-close hardware.',
    icon: '☰'
  },
  {
    title: 'Countertops & Surfaces',
    desc: 'Granite, quartz, marble countertops with precision measurement.',
    icon: '▭'
  },
  {
    title: 'Lighting & Electrical',
    desc: 'Recessed lighting, under-cabinet LEDs, pendant fixtures, electrical upgrades.',
    icon: '☀'
  },
  {
    title: 'Flooring & Backsplash',
    desc: 'Tile, hardwood, LVP, and natural stone with beautiful backsplash designs.',
    icon: '⚑'
  },
  {
    title: 'Plumbing & Fixtures',
    desc: 'Sink installation, faucet upgrades, garbage disposal, dishwasher hookups.',
    icon: '⎙'
  }
];

const kitchenAreas = [
  'Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder',
  'Castle Rock', 'Lakewood', 'Arvada', 'Thornton', 'Westminster',
  'Centennial', 'Highlands Ranch', 'Littleton', 'Longmont', 'Broomfield',
  'Parker', 'Commerce City', 'Pueblo', 'Greeley', 'Loveland'
];

const kitchenKeywords = [
  { term: 'Kitchen remodeling near me', place: 'Denver Metro' },
  { term: 'Best kitchen contractor near me', place: 'Colorado' },
  { term: 'Kitchen renovation near me', place: 'Aurora, CO' },
  { term: 'Kitchen remodel Denver', place: 'Custom designs' },
  { term: 'Kitchen cabinets near me', place: 'Colorado Springs' },
  { term: 'Kitchen countertops near me', place: 'Fort Collins' },
  { term: 'Affordable kitchen remodel', place: 'Boulder, CO' },
  { term: 'Open concept kitchen remodel', place: 'Castle Rock' },
  { term: 'Modern kitchen design near me', place: 'Lakewood' },
  { term: 'Kitchen island installation', place: 'Arvada, CO' },
  { term: 'Kitchen flooring contractor', place: 'Thornton, CO' },
  { term: 'Kitchen backsplash installation', place: 'Westminster' },
  { term: 'Luxury kitchen renovation', place: 'Highlands Ranch' },
  { term: 'Kitchen lighting design', place: 'Centennial, CO' },
  { term: 'Kitchen remodeling company', place: 'Littleton, CO' },
  { term: 'Custom kitchen cabinets', place: 'Longmont, CO' },
  { term: 'Kitchen sink installation near me', place: 'Broomfield' },
  { term: 'Kitchen renovation contractor', place: 'Parker, CO' }
];

const formPoints = [
  'Free in-home consultation & 3D design',
  'Transparent pricing — no hidden fees',
  'Flexible financing options available',
  '$500 off or FREE refrigerator — ask us!'
];

export default function KitchenRemodeling() {
  // LeadConnector's script resizes the embedded form to fit its fields
  useEffect(() => {
    if (document.querySelector(`script[src="${FORM_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = FORM_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kitchen Remodeling Denver | Custom Kitchen Renovation | JRC</title>
        <meta
          name="description"
          content="Colorado's trusted kitchen remodeling experts. Custom designs, quality craftsmanship, on time and on budget. $500 off or a free refrigerator with a complete renovation."
        />
        <link rel="canonical" href="https://jrchomeremodeling.com/kitchen-remodeling/" />
      </Helmet>

      <article className="kitchen-page">
        {/* ==========================================
            SECTION 1: HERO
           ========================================== */}
        <section className="kit-hero">
          <div className="kit-hero-media" aria-hidden="true">
            <img src="/assets/images/kitchen-hero-bg.png" alt="" />
          </div>

          <div className="kit-container kit-hero-inner">
            <span className="kit-eyebrow kit-eyebrow-orange">
              Dream It &middot; Design It &middot; Live It
            </span>

            <h1 className="kit-hero-title">
              Kitchen Remodeling
              <span className="kit-hero-accent">Done Right.</span>
            </h1>

            <p className="kit-hero-sub">
              Beautiful kitchens. Quality craftsmanship. Designed around your life.
              Colorado&rsquo;s trusted kitchen remodeling experts.
            </p>

            <ul className="kit-hero-chips">
              {heroChips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>

            <div className="kit-hero-cta">
              <a href="#estimate-form" className="kit-btn kit-btn-primary">
                Get Your Free Quote <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#transformations" className="kit-btn kit-btn-white">
                See Our Work
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: TRUST BAR
           ========================================== */}
        <section className="kit-trust">
          <ul className="kit-container kit-trust-list">
            {trustBar.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* ==========================================
            SECTION 3: BEFORE / AFTER SLIDER
           ========================================== */}
        <section id="transformations" className="kit-sec">
          <div className="kit-container">
            <div className="kit-head">
              <span className="kit-eyebrow">Our Transformations</span>
              <h2 className="kit-title">
                See the <span className="kit-accent">Before &amp; After</span>
              </h2>
              <p className="kit-sub">
                Drag the slider to reveal the transformation. Real work from a JRC Home
                Remodeling project in Colorado.
              </p>
            </div>

            <div className="kit-ba">
              <BeforeAfterSlider
                beforeImage="/assets/images/kitchen-ba-before.jpg"
                afterImage="/assets/images/kitchen-ba-after.jpg"
                beforeAlt="Dated oak kitchen before the JRC remodel"
                afterAlt="Finished kitchen with white cabinetry and gold pendant lighting"
                height="clamp(300px, 52vh, 560px)"
                borderRadius="14px"
              />
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 4: VIDEOS
           ========================================== */}
        <section className="kit-sec kit-sec-cream">
          <div className="kit-container">
            <div className="kit-head">
              <span className="kit-eyebrow">Watch Us Work</span>
              <h2 className="kit-title">
                Kitchen Remodeling <span className="kit-accent">In Action</span>
              </h2>
              <p className="kit-sub">
                See our Colorado team in action &mdash; from demolition to the final reveal.
              </p>
            </div>

            <div className="kit-videos">
              {kitchenVideos.map((clip) => (
                <div className="kit-video-card" key={clip.key}>
                  <div
                    className={`kit-video-frame ${
                      clip.kind === 'youtube' ? 'kit-video-wide' : 'kit-video-tall'
                    }`}
                  >
                    <iframe
                      title={clip.title}
                      src={
                        clip.kind === 'vimeo'
                          ? `https://player.vimeo.com/video/${clip.id}?h=${clip.hash}`
                          : `https://www.youtube.com/embed/${clip.id}`
                      }
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; web-share"
                      allowFullScreen
                    />
                  </div>

                  <div className="kit-video-copy">
                    <h3 className="kit-video-title">{clip.title}</h3>
                    <p className="kit-video-caption">{clip.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: SERVICES
           ========================================== */}
        <section className="kit-sec kit-sec-dark">
          <div className="kit-container">
            <div className="kit-head">
              <h2 className="kit-title kit-title-light">
                Complete Kitchen <span className="kit-accent">Remodeling Services</span>
              </h2>
              <p className="kit-sub kit-sub-light">
                From custom cabinets to complete gut renovations, we handle every detail.
              </p>
            </div>

            <div className="kit-services">
              {kitchenServices.map((item) => (
                <div className="kit-service" key={item.title}>
                  <span className="kit-service-icon" aria-hidden="true">{item.icon}</span>
                  <h3 className="kit-service-title">{item.title}</h3>
                  <p className="kit-service-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 6: OFFERS
           ========================================== */}
        <section className="kit-sec">
          <div className="kit-container">
            <div className="kit-head kit-head-center">
              <span className="kit-eyebrow">Limited Time Offer</span>
              <h2 className="kit-title">
                <span className="kit-accent">Exclusive Savings</span> on Your Kitchen Remodel
              </h2>
            </div>

            <div className="kit-offers">
              <div className="kit-offer kit-offer-orange">
                <span className="kit-offer-pill">Limited Time</span>
                <strong className="kit-offer-amount">$500 OFF</strong>
                <span className="kit-offer-for">Your Kitchen Remodel</span>
                <span className="kit-offer-terms">
                  Projects over $10,000 &middot; Cannot combine offers
                </span>
              </div>

              <span className="kit-offer-or">or</span>

              <div className="kit-offer kit-offer-blue">
                <span className="kit-offer-pill kit-offer-pill-blue">Bonus Offer</span>
                <strong className="kit-offer-amount kit-offer-amount-blue">
                  FREE Refrigerator
                </strong>
                <span className="kit-offer-for">With Complete Renovation</span>
                <span className="kit-offer-terms">
                  Select models &middot; Mention at consultation
                </span>
              </div>
            </div>

            <div className="kit-offers-cta">
              <a href="#estimate-form" className="kit-btn kit-btn-primary kit-btn-pill">
                Claim Your Offer Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 7: SERVICE AREAS
           ========================================== */}
        <section className="kit-sec kit-sec-dark">
          <div className="kit-container">
            <div className="kit-head">
              <span className="kit-eyebrow kit-eyebrow-orange">Serving All Of Colorado</span>
              <h2 className="kit-title kit-title-light">
                Kitchen Remodeling <span className="kit-accent">Near You</span>
              </h2>
              <p className="kit-sub kit-sub-light">
                JRC Home Remodeling proudly serves homeowners across the Front Range and beyond.
              </p>
            </div>

            <ul className="kit-areas">
              {kitchenAreas.map((city) => (
                <li className="kit-area" key={city}>
                  <span aria-hidden="true">&#128205;</span> {city}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 8: SEARCH TERMS
           ========================================== */}
        <section className="kit-sec kit-sec-cream">
          <div className="kit-container">
            <div className="kit-head">
              <span className="kit-eyebrow">Find Us When You Search</span>
              <h2 className="kit-title">
                Kitchen Remodeling <span className="kit-accent">Near Me</span> in Colorado
              </h2>
              <p className="kit-sub">
                Wherever you are in Colorado, JRC Home Remodeling is just a call away.
              </p>
            </div>

            <ul className="kit-keywords">
              {kitchenKeywords.map((row) => (
                <li key={row.term}>
                  <strong>{row.term}</strong>
                  <span>&mdash; {row.place}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==========================================
            SECTION 9: QUOTE FORM
           ========================================== */}
        <section id="estimate-form" className="kit-sec">
          <div className="kit-container kit-form-grid">
            <div className="kit-form-left">
              <span className="kit-eyebrow">Get Started Today</span>
              <h2 className="kit-title">
                Request Your <span className="kit-accent">Free Quote</span>
              </h2>
              <p className="kit-sub">
                Fill out the form and one of our kitchen remodeling specialists will be in
                touch within 24 hours. No pressure, no obligation &mdash; just expert advice
                for your dream kitchen.
              </p>

              <ul className="kit-form-points">
                {formPoints.map((point) => (
                  <li key={point}>
                    <span className="kit-form-check" aria-hidden="true">&#10003;</span>
                    {point}
                  </li>
                ))}
              </ul>

              <p className="kit-form-call">
                Prefer to talk? Call{' '}
                <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
              </p>
            </div>

            <div className="kit-form-right">
              <iframe
                src={FORM_SRC}
                id={`inline-${FORM_ID}`}
                title="Request Your Free Quote"
                className="kit-form-embed"
                scrolling="no"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Kitchen Remodeling Quote"
                data-form-id={FORM_ID}
                data-layout-iframe-id={`inline-${FORM_ID}`}
                data-height="1150"
              />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
