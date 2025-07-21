import { useEffect } from "react";

const useSectionObserver = (sectionRefs, setActiveSection) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const sectionId = entry.target.getAttribute("id");
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: [0.3]
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs, setActiveSection]);
};

export default useSectionObserver;
