import { Mail } from "lucide-react"
import { usePortfolio } from "@/i18n"
import { getContactChannels } from "@/lib/social-channels"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type ContactDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const { site, ui } = usePortfolio()
  const contactChannels = getContactChannels(site.social)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" showCloseButton>
        <DialogHeader className="items-center text-center sm:items-center sm:text-center">
          <div className="mx-auto mb-2 flex size-14 items-center justify-center rounded-full bg-primary/10">
            <Mail className="size-7 text-primary" />
          </div>
          <DialogTitle className="text-xl">{ui.getInTouch}</DialogTitle>
          <DialogDescription className="text-base">{ui.contactIntro}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground">{ui.reachOut}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-all text-lg font-semibold text-primary hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {contactChannels.map(({ id, href, label, Icon }) => (
              <Button
                key={id}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a href={href} target="_blank" rel="noopener noreferrer" />
                }
              >
                <Icon className="size-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        <DialogFooter className="flex-row justify-center gap-2 sm:justify-center">
          <Button
            nativeButton={false}
            render={<a href={`mailto:${site.email}`} />}
          >
            {ui.sendEmail}
          </Button>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {ui.close}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

