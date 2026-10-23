import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span className="flex flex-col gap-4">
          <Heading
            level="h1"
            className="text-5xl leading-tight text-ui-fg-base font-bold"
          >
            BAMAGATE
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-10 text-ui-fg-subtle font-normal"
          >
            Home & Kitchen - Delivered to Singapore
          </Heading>
        </span>
        <Link href="/sg/store">
          <Button variant="primary" size="large">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero