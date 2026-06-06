import { Quote } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../components/SectionHeader'
import { testimonials } from '../data/portfolio'
import 'swiper/css'
import 'swiper/css/pagination'

const TestimonialsSection = () => (
  <section id="testimonials" className="section-wrap">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Testimonials"
        title="What collaborators notice in the work."
        description="Representative feedback focused on full stack ownership, responsive UI quality, and practical delivery habits."
        align="center"
      />

      <div data-reveal className="mt-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1120: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <article className="testimonial-card">
                <Quote className="h-8 w-8 text-cyan-200" />
                <p className="mt-6 text-base leading-8 text-slate-200">{testimonial.quote}</p>
                <div className="mt-8">
                  <h3 className="font-black text-white">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
)

export default TestimonialsSection
