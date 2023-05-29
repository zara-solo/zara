import { Request, Response } from 'express';
import {connection} from '../database';

export const getAll = (req: Request, res: Response): void => {
    const sql: string = `SELECT * FROM product`;
    connection.query(sql, (error: any, results: any) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).json(results);
      }
    });
  };

export const getAllWomenProducts = (req: Request, res: Response): void => {
  const sql: string = `SELECT * FROM product WHERE category = "FEMME"`;
  connection.query(sql, (error: any, results: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
};
export const getAllmenProducts = (req: Request, res: Response): void => {
  const sql: string = `SELECT * FROM product WHERE category = "HOMME"`;
  connection.query(sql, (error: any, results: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
};
export const getAllkidsProducts= (req: Request, res: Response): void => {
  const sql: string = `SELECT * FROM product WHERE category = "KIDS"`;
  connection.query(sql, (error: any, results: any) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results);
    }
  });
};




export const getOneProductById = (req: Request, res: Response): void => {
  const id: any = req.params.id;

  const sql: string = `SELECT * FROM product WHERE idproduct="${id}"`;
  connection.query(sql, (err: any, result: any) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.status(200).json(result[0]);
      }
    }
  });
};

