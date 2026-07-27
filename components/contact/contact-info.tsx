import { MapPin, Clock, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
        <div>
          <p className="font-display text-h4 font-semibold text-background">Email</p>
          <a
            href="mailto:admin.bridgeworksafrica@gmail.com"
            className="mt-1 block text-body text-background/75 underline decoration-background/30 underline-offset-4 hover:text-background hover:decoration-gold"
          >
            admin.bridgeworksafrica@gmail.com
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
        <div>
          <p className="font-display text-h4 font-semibold text-background">Location</p>
          <p className="mt-1 text-body text-background/75">Ibadan, Oyo State, Nigeria</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} />
        <div>
          <p className="font-display text-h4 font-semibold text-background">Enquiries</p>
          <p className="mt-1 text-body text-background/75">
            Every enquiry is read and responded to directly by the team.
          </p>
        </div>
      </div>
    </div>
  );
}
