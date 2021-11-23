import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../../../../config/upload';
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '../../../../modules/cars/useCases/createCarSpecification/createCarSpecificationController';
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { UploadCarImagesController } from '../../../../modules/cars/useCases/uploadCarImages/uploadCarImagesController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig.upload('./tmp/cars'));

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const uploadCarImagesController = new UploadCarImagesController();
const createCarSpecificationController = new CreateCarSpecificationController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);

carsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  upload.array('images'),
  uploadCarImagesController.handle,
);

export { carsRoutes };
