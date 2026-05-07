import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/ziar_1.jpg";
import g2 from "@/assets/ziar_2.jpg";
import g3 from "@/assets/ziar_3.jpg";
import g4 from "@/assets/ziar_4.jpg";
import g5 from "@/assets/ziar_5.jpg";
import g6 from "@/assets/ziar_6.jpg";
import g7 from "@/assets/ziar_7.jpg";
import g8 from "@/assets/ziar_8.jpg";
import g9 from "@/assets/ziar_9.jpg";
import g10 from "@/assets/ziar_10.jpg";
import g11 from "@/assets/ziar_11.jpg";
import g12 from "@/assets/ziar_12.jpg";
import g13 from "@/assets/ziar_13.jpg";
import g14 from "@/assets/ziar_14.jpg";
import g15 from "@/assets/ziar_15.jpg";
import zg1 from "@/assets/zg_1.jpg";
import zg2 from "@/assets/zg_2.jpg";
import zg3 from "@/assets/zg_3.jpg";
import zg4 from "@/assets/zg_4.jpg";
import zg5 from "@/assets/zg_5.jpg";
import zg6 from "@/assets/zg_6.jpg";
import zg7 from "@/assets/zg_7.jpg";
import zg8 from "@/assets/zg_8.jpg";
import zg9 from "@/assets/zg_9.jpg";
import zg10 from "@/assets/zg_10.jpg";
import zg11 from "@/assets/zg_11.jpg";
import zg12 from "@/assets/zg_12.jpg";
import zg13 from "@/assets/zg_13.jpg";
import zg14 from "@/assets/zg_14.jpg";
import zg15 from "@/assets/zg_15.jpg";

const photos = [
  { src: g1, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g2, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g3, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g4, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g5, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g6, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g7, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g8, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g9, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g10, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g11, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g12, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g13, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g14, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: g15, title: "Ziar du COKSBSA", alt: "A Yoff, chez Serigne Babacar Sy Abdou" },
  { src: zg1, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg2, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg3, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg4, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg5, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg6, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg7, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg8, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg9, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg10, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg11, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg12, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg13, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg14, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },
  { src: zg15, title: "Ziar Generale 2026", alt: "Dedie a Serigne Babacar Sy" },  
];

const Gallery = () => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length
      ),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section id="galerie" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-secondary font-medium uppercase tracking-widest text-xs mb-4">
            Galerie
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Nos événements en images
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Revivez les moments forts de la communauté à travers une sélection
            de photos prises lors de nos derniers rassemblements.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {photos.map((photo, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Agrandir : ${photo.alt}`}
                  className="group relative block w-full overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-primary-foreground text-sm font-medium text-left">
                      {photo.alt}
                    </span>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-background border-border" />
          <CarouselNext className="hidden md:flex -right-4 bg-background border-border" />
        </Carousel>
      </div>

      <Dialog open={isOpen} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-background border-border">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <DialogDescription className="sr-only">{active.alt}</DialogDescription>

              <div className="relative bg-primary">
                <img
                  src={active.src}
                  alt={active.alt}
                  width={1024}
                  height={768}
                  className="w-full max-h-[75vh] object-contain bg-primary"
                />

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Photo précédente"
                  className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-primary flex items-center justify-center shadow-card transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Photo suivante"
                  className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-primary flex items-center justify-center shadow-card transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-5 border-t border-border flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    {active.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {active.alt}
                  </p>
                </div>
                <span className="text-xs font-medium text-secondary whitespace-nowrap">
                  {(activeIndex ?? 0) + 1} / {photos.length}
                </span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
