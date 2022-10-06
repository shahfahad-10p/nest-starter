import * as Joi from 'joi';

export interface Cat {
  name: string;
  age: number;
  breed: string;
}

export const CatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string(),
});
