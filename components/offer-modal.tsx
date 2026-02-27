"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

const WHATSAPP_URL =
  "https://wa.me/16398954000?text=I%20want%20to%20save%20taxes";

const OFFER_DISMISSED_KEY = "northfin-offer-dismissed";

export function OfferModal() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const dismissed = sessionStorage.getItem(OFFER_DISMISSED_KEY);
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      track("offer_modal_shown", { page: pathname ?? "/" });
    }
  }, [open, pathname]);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) {
          sessionStorage.setItem(OFFER_DISMISSED_KEY, "true");
          track("offer_modal_dismissed", { page: pathname ?? "/" });
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="max-w-md overflow-hidden border-0 p-0 shadow-2xl sm:max-w-md"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-white/95 text-foreground shadow-md hover:bg-white hover:text-foreground"
          onClick={() => {
            setOpen(false);
            sessionStorage.setItem(OFFER_DISMISSED_KEY, "true");
          }}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </Button>
        <div className="relative flex flex-col overflow-hidden">
          {/* Photo and gradient overlay - fixed height so it always shows */}
          <div className="relative h-64 shrink-0 overflow-hidden bg-primary sm:h-72">
            <Image
              src="/assets/Myphoto.png"
              alt="North Fin Services tax expert"
              fill
              className="object-cover object-top"
              sizes="400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <span className="inline-block animate-offer-shake rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-950">
                Limited period offer
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="shrink-0 overflow-y-auto bg-background p-6">
            <DialogTitle className="sr-only">
              Limited period offer — Tax filing from $39
            </DialogTitle>
            <p className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Tax filing starting at <span className="text-primary">$39</span>
              <span className="ml-0.5 text-base font-normal text-muted-foreground">
                *
              </span>
            </p>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              *Simple returns. Price may vary by complexity.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block"
              onClick={() => track("whatsapp_click", { source: "offer_modal" })}
            >
              <Button
                size="lg"
                className="w-full bg-[#25D366] text-white hover:bg-[#20BD5A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to our expert now
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
