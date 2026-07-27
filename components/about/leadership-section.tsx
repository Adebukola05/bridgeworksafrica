import { Section, SectionHeader, Avatar, StaggerGrid, StaggerItem } from "@/components/ui";
import { leadership } from "./leadership-data";

export function LeadershipSection() {
  return (
    <Section tone="default" border="top">
      <SectionHeader
        eyebrow="Leadership"
        title="Governance built for institutional partners."
        description="Hover a card to see who's who."
      />
      <StaggerGrid className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((leader) => (
          <StaggerItem key={leader.name}>
            <div className="group [perspective:1200px]" tabIndex={0}>
              <div className="relative aspect-[4/5] w-full rounded-lg shadow-card transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
                {/* Front, image only */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg border border-background/10 bg-surface [backface-visibility:hidden]">
                  <Avatar name={leader.name} photo={leader.photo} size={180} />
                </div>

                {/* Back, name + role */}
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-navy px-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="font-display text-h4 font-semibold text-background">{leader.name}</p>
                  <p className="mt-2 text-small font-medium text-gold">{leader.role}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
}
