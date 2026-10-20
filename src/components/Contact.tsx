import React from 'react';
import { MapPin, Clock, Phone, Camera, ArrowUpRight } from 'lucide-react';
import { salonConfig } from '../config/salon';

export const Contact: React.FC = () => {
  const { locationSection, contact } = salonConfig;

  return (
    <section
      id="contact"
      className="bg-surface-container py-20 sm:py-24 px-5 sm:px-6 lg:px-12 border-t border-outline-variant/30"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Details */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-secondary font-bold">
              {locationSection.eyebrow}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] text-primary mt-2 font-normal">
              {locationSection.title}
            </h2>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-serif text-base text-primary font-medium">Address</p>
                <p className="font-sans text-xs sm:text-[14px] text-on-surface-variant mt-1 leading-relaxed">
                  {contact.address.street}
                  <br />
                  {contact.address.area}, {contact.address.city}, {contact.address.state} {contact.address.pincode}
                </p>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-xs text-secondary uppercase tracking-wider mt-2 hover:underline font-semibold"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Atelier Hours */}
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-serif text-base text-primary font-medium">Atelier Hours</p>
                {contact.openingHours.map((oh, idx) => (
                  <p key={idx} className="font-sans text-xs sm:text-[14px] text-on-surface-variant mt-1 leading-relaxed">
                    {oh.days}: {oh.hours}
                    {oh.note && (
                      <span className="text-outline text-xs block mt-0.5">{oh.note}</span>
                    )}
                  </p>
                ))}
              </div>
            </div>

            {/* Direct Enquiries */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-1" />
              <div>
                <p className="font-serif text-base text-primary font-medium">Direct Enquiries</p>
                <p className="font-sans text-xs sm:text-[14px] text-on-surface-variant mt-1 leading-relaxed">
                  Telephone:{' '}
                  <a href={`tel:${contact.phone}`} className="hover:text-primary hover:underline">
                    {contact.phoneDisplay}
                  </a>
                  <br />
                  WhatsApp Concierge:{' '}
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary hover:underline"
                  >
                    {contact.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>

            {/* Social Atelier */}
            {contact.social.instagramHandle && (
              <div className="flex items-start gap-4">
                <Camera className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <div>
                  <p className="font-serif text-base text-primary font-medium">Social Atelier</p>
                  <a
                    href={contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs sm:text-[14px] text-secondary hover:text-primary transition-colors mt-0.5 inline-block font-medium hover:underline"
                  >
                    {contact.social.instagramHandle}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Stylized Architectural Map Visual with Atelier anchor */}
        <div id="atelier" className="lg:col-span-6">
          <div className="relative bg-surface-container-high border border-outline-variant/40 p-2.5 sm:p-3">
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-surface">
              <img
                src={locationSection.mapImage.src}
                alt={locationSection.mapImage.alt}
                loading="lazy"
                className="w-full h-full object-cover contrast-[90%] brightness-[98%]"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />

              {/* Location Badge with Beacon */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-surface-container-lowest px-3.5 py-2.5 sm:px-4 sm:py-3 border border-outline-variant/30 flex items-center gap-3 shadow-sm">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary animate-pulse shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-sans text-xs sm:text-[13px] font-semibold text-primary uppercase tracking-wide">
                    {locationSection.mapImage.badgeTitle}
                  </p>
                  <p className="font-sans text-[11px] text-outline">
                    {locationSection.mapImage.badgeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
