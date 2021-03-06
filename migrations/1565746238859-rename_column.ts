import {MigrationInterface, QueryRunner} from "typeorm";

export class renameColumn1565746238859 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE user RENAME COLUMN name TO fullname`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE user RENAME COLUMN fullname TO name`)
    }

}
