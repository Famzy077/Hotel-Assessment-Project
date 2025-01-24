import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
   
  export function Reviews() {
    const settings = {
      dots: false, // Remove dots
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false, // Remove previous and next arrows
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: false // Ensure dots are off for responsive breakpoints
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            arrows: false,
            dots: false
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
          }
        }
      ]
    };
    return (
      <div className=" bg-white my-40 mb-20">
        <Slider {...settings}>
          <main>
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <div className="border-2 p-4 m-5">
                  <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                  <Avatar
                      size="lg"
                      variant="circular"
                      src="https://themewagon.github.io/marian/assets/img/logo/testimonial.png"
                      alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                          Jones Andrew
                      </Typography>
                      <div className="5 flex items-center gap-0">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                      </div>
                      </div>
                      <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                  </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                  <Typography>
                      &quot;I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.&quot;
                  </Typography>
                  </CardBody>
              </div>
            </Card>
          </main>

          <main>
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <div className="border-2 p-4 m-5">
                  <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                  <Avatar
                      size="lg"
                      variant="circular"
                      src="https://plus.unsplash.com/premium_photo-1661657805057-732cec9cbe20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMHdvbWFufGVufDB8fDB8fHww"
                      alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                          Alice Morgan
                      </Typography>
                      <div className="5 flex items-center gap-0">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                      </div>
                      </div>
                      <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                  </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                  <Typography>
                      &quot;I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.!!!&quot;
                  </Typography>
                  </CardBody>
              </div>
            </Card>
          </main>

          <main>
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <div className="border-2 p-4 m-5">
                  <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                  <Avatar
                      size="lg"
                      variant="circular"
                      src="https://themewagon.github.io/marian/assets/img/logo/testimonial.png"
                      alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                          Jones Jonny
                      </Typography>
                      <div className="5 flex items-center gap-0">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                      </div>
                      </div>
                      <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                  </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                  <Typography>
                      &quot;I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.!!!&quot;
                  </Typography>
                  </CardBody>
              </div>
            </Card>
          </main>

          <main>
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <div className="border-2 p-4 m-5">
                  <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                  <Avatar
                      size="lg"
                      variant="circular"
                      src="https://plus.unsplash.com/premium_photo-1661657805057-732cec9cbe20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMHdvbWFufGVufDB8fDB8fHww"
                      alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                          Tania Andrew
                      </Typography>
                      <div className="5 flex items-center gap-0">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                      </div>
                      </div>
                      <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                  </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                  <Typography>
                      &quot;I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.!!!&quot;
                  </Typography>
                  </CardBody>
              </div>
            </Card>
          </main>

          <main>
            <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
              <div className="border-2 p-4 m-5">
                  <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="mx-0 flex items-center gap-4 pt-0 pb-8"
                  >
                  <Avatar
                      size="lg"
                      variant="circular"
                      src="https://plus.unsplash.com/premium_photo-1661657805057-732cec9cbe20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWZyaWNhbiUyMHdvbWFufGVufDB8fDB8fHww"
                      alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                          Tania Andrew
                      </Typography>
                      <div className="5 flex items-center gap-0">
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                          <StarIcon />
                      </div>
                      </div>
                      <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                  </div>
                  </CardHeader>
                  <CardBody className="mb-6 p-0">
                  <Typography>
                      &quot;I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive. !!!&quot;
                  </Typography>
                  </CardBody>
              </div>
            </Card>
          </main>
        </Slider>
      </div>
    );
  }