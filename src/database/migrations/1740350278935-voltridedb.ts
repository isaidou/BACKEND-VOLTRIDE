import { MigrationInterface, QueryRunner } from 'typeorm';

export class Voltridedb1740350278935 implements MigrationInterface {
  name = 'Voltridedb1740350278935';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "supplier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "contactPerson" character varying(100), "phoneNumber" character varying, "address" text, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "scooter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "serialNumber" character varying(100) NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'available', "totalMileage" integer NOT NULL DEFAULT '0', "totalChargeCycles" integer NOT NULL DEFAULT '0', "purchaseDate" date, "warrantyEndDate" date, "scooterModelId" uuid NOT NULL, CONSTRAINT "PK_d34b48695ebd552222c6e8ec675" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "scooter_model_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "brand" character varying(100), "maintenanceIntervalKm" integer, "maintenanceIntervalMonths" integer, "description" text, CONSTRAINT "PK_e5b406096754014b78ab5366f62" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "purchase_order_line" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "partId" uuid NOT NULL, "quantity" integer NOT NULL, "unitPrice" numeric(10,2) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "purchase_order_id" uuid, CONSTRAINT "PK_6077a6da2cd5d311c17e6ac7cb3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "purchase_order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "supplierId" uuid NOT NULL, "orderDate" TIMESTAMP NOT NULL DEFAULT now(), "expectedDeliveryDate" TIMESTAMP, "status" character varying(50) NOT NULL DEFAULT 'open', "totalCost" numeric(10,2) NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ad3e1c7b862f4043b103a6c8c60" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "part" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" text, "stockQuantity" integer NOT NULL DEFAULT '0', "minStockThreshold" integer NOT NULL DEFAULT '0', "price" numeric(10,2) NOT NULL DEFAULT '0', "lastEventTimestamp" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_58888debdf048d2dfe459aa59da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "inventory_transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "partId" uuid NOT NULL, "quantityChange" integer NOT NULL, "transactionType" character varying(10) NOT NULL, "transactionDate" TIMESTAMP NOT NULL, "sourceType" character varying(50), "sourceId" uuid, CONSTRAINT "PK_f58bbe29fa78f5b0d59d840d3ce" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "maintenance" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying(50) NOT NULL, "maintenanceDate" TIMESTAMP, "cost" numeric(10,2) NOT NULL DEFAULT '0', "notes" text, "scooterId" uuid NOT NULL, "performedById" uuid, "currentMileage" integer, "currentChargeCycles" integer, CONSTRAINT "PK_542fb6a28537140d2df95faa52a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "maintenance_parts" ("maintenance_id" uuid NOT NULL, "part_id" uuid NOT NULL, "quantityUsed" integer NOT NULL DEFAULT '1', "cost" numeric(10,2), CONSTRAINT "PK_8806d36f294f6bbbc2211933035" PRIMARY KEY ("maintenance_id", "part_id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "incident" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "scooterId" uuid NOT NULL, "reportedById" uuid, "dateReported" TIMESTAMP NOT NULL DEFAULT now(), "description" text NOT NULL, "status" character varying(50) NOT NULL DEFAULT 'open', "impact_on_operation" boolean NOT NULL DEFAULT true, "resolutionNotes" text, CONSTRAINT "PK_5f90b28b0b8238d89ee8edcf96e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "event_store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "aggregateId" uuid NOT NULL, "aggregateType" character varying(50) NOT NULL, "eventType" character varying(50) NOT NULL, "eventPayload" jsonb NOT NULL, "eventTimestamp" TIMESTAMP NOT NULL, "version" integer NOT NULL, "processed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_f112deaffb65c3866e4d3f0fd13" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "booking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid NOT NULL, "scooterId" uuid NOT NULL, "startDatetime" TIMESTAMP NOT NULL, "endDatetime" TIMESTAMP, "location" character varying(100), "status" character varying(50) NOT NULL DEFAULT 'reserved', "notes" text, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_order_line" ADD CONSTRAINT "FK_5d8c68b77890a17d89746f2f861" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance_parts" ADD CONSTRAINT "FK_28a44e71f0a005a36c186a306ed" FOREIGN KEY ("maintenance_id") REFERENCES "maintenance"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance_parts" ADD CONSTRAINT "FK_1bed423a68d378e0771ef56496d" FOREIGN KEY ("part_id") REFERENCES "part"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "maintenance_parts" DROP CONSTRAINT "FK_1bed423a68d378e0771ef56496d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "maintenance_parts" DROP CONSTRAINT "FK_28a44e71f0a005a36c186a306ed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "purchase_order_line" DROP CONSTRAINT "FK_5d8c68b77890a17d89746f2f861"`,
    );
    await queryRunner.query(`DROP TABLE "booking"`);
    await queryRunner.query(`DROP TABLE "event_store"`);
    await queryRunner.query(`DROP TABLE "incident"`);
    await queryRunner.query(`DROP TABLE "maintenance_parts"`);
    await queryRunner.query(`DROP TABLE "maintenance"`);
    await queryRunner.query(`DROP TABLE "inventory_transaction"`);
    await queryRunner.query(`DROP TABLE "part"`);
    await queryRunner.query(`DROP TABLE "purchase_order"`);
    await queryRunner.query(`DROP TABLE "purchase_order_line"`);
    await queryRunner.query(`DROP TABLE "scooter_model_entity"`);
    await queryRunner.query(`DROP TABLE "scooter"`);
    await queryRunner.query(`DROP TABLE "supplier"`);
  }
}
