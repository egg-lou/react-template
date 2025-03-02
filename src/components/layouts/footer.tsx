import { siteConfig } from "@/configs/site-config";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border-t bg-background"
    >
      <div className="container mx-auto px-4 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.title}. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
