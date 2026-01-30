export default defineAppConfig({
    ui: {
      colors: {
      primary: 'primary',
      secondary: 'secondary',
      neutral: 'black',
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
      }
    }
  })