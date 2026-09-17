ALTER TABLE "conversations" DROP CONSTRAINT "conversations_persona_id_personas_id_fk";
--> statement-breakpoint
ALTER TABLE "messages" ADD COLUMN "persona_id" uuid NOT NULL;--> statement-breakpoint
ALTER TABLE "personas" ADD COLUMN "slug" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "messages" ADD CONSTRAINT "messages_persona_id_personas_id_fk" FOREIGN KEY ("persona_id") REFERENCES "public"."personas"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "conversations" DROP COLUMN "persona_id";--> statement-breakpoint
ALTER TABLE "personas" DROP COLUMN "system_prompt";--> statement-breakpoint
ALTER TABLE "personas" ADD CONSTRAINT "personas_slug_unique" UNIQUE("slug");