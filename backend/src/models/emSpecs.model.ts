import { Document, Schema, Model, model as createModel } from 'mongoose';

export interface emSpec extends Document {
  brand: string;
  modelName: string; 
  year: number;
  listPrice: number;
  colors?: string[];
  mileage: number;
  power: number;
  maxSpeed: number;
}

const oemSpecSchema = new Schema<emSpec>(
  {
    brand: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    listPrice: {
      type: Number,
      required: true,
    },
    colors: [String],
    mileage: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    maxSpeed: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const OEMSpecModel: Model<emSpec> = createModel<emSpec>('oemSpec', oemSpecSchema);

export { OEMSpecModel };
