export default defineAppConfig({
    ui: {
      colors: {
        primary: 'generic-primary',
        neutral: 'white',
        error: 'red'
      },
      button: {
        defaultVariants: {
          color: 'primary',
          variant: 'outline',
        },
        slots: {
          base: 'hover:scale-[102%] transition-all justify-center '
        }
      },
      input: {
        defaultVariants: {
          color: 'primary',
          variant: 'outline',
        }
      },
      toast: {
        slots: {
          root: 'rounded-none ring-primary ring-2 bg-glass',
          title: 'text-md md:text-lg'
        }
      },
      popover: {
        slots: {
          content: 'bg-glass ring-primary'
        }
      },
      select: {
        slots: {
          base: 'bg-glass ring-primary',
          indicator: 'text-primary',
          content: 'bg-glass ring-primary'
        }
      }
    }
  })