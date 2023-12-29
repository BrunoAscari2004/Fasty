import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaRegImage, FaRegPlusSquare } from "react-icons/fa";
import ICarForm from "../../@types/ICarForm";
import { saveCar } from "./fastySlice";
import { IAppDispatch } from "../../store";

const Fasty: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectImage] = useState<File | null>(null);

  const dispatch: IAppDispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const carData: ICarForm = {
      model: formData.get("Modelo") as string,
      imageUrl: selectedImage ? URL.createObjectURL(selectedImage) : "",
    };
    dispatch(saveCar(carData));

    setSelectImage(null);
    setDialogOpen(false);
  };

  //File opening

  const filesInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    if (filesInputRef.current) {
      filesInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectImage(event.target.files[0]);
    }
  };
  /////////////////////////

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            <div>Fasty</div>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="mt-2 ml-5 text-xl">Resumo da Corrida</div>

      <div className="flex justify-end mr-5">
        <Button
          style={{
            border: "2px solid rgb(32, 116, 212)",
            borderRadius: "10px",
          }}
          onClick={() => setDialogOpen(true)}
        >
          <FaRegPlusSquare className="h-6 w-6 mr-3" />
          <div className="mt-0.5">Novo Carro</div>
        </Button>
      </div>
      <div className=""></div>

      <Dialog open={!!dialogOpen} fullWidth maxWidth="md">
        <DialogTitle>Adicionar carro</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-end mr-28 py-10 mb-10 ">
              <div className="mr-40">
                {selectedImage ? (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    style={{
                      maxWidth: "350px",
                      maxHeight: "250px",
                      width: "320px",
                      height: "250px",
                      objectFit: "cover",
                      marginLeft: "40px",
                      borderRadius: "10px",
                    }}
                  />
                ) : (
                  <img
                    alt="Foto de Capa"
                    style={{
                      backgroundColor: "rgb(224,224,224)",
                      maxWidth: "350px",
                      maxHeight: "250px",
                      width: "320px",
                      height: "250px",
                      borderRadius: "10px",
                      textAlign: "center",
                      lineHeight: "200px",
                      marginLeft: "40px",
                    }}
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <TextField label="Modelo" size="small" placeholder="Modelo" />
                <input
                  ref={filesInputRef}
                  accept="image/*"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <Button
                  onClick={handleFileUploadClick}
                  style={{
                    textTransform: "capitalize",
                    width: "180px",
                    marginLeft: "20px",
                  }}
                >
                  <FaRegImage className="h-5 w-5 mr-3 mb-1" />
                  <div>Fazer Upload</div>
                </Button>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                style={{ border: "1px solid rgb(32, 116, 212)" }}
                onClick={() => {
                  setDialogOpen(false);
                  setTimeout(() => {
                    setSelectImage(null);
                  }, 300);
                }}
              >
                Cancelar
              </Button>
              <Button
                style={{ color: "white", backgroundColor: "rgb(32, 116, 212)" }}
                type="submit"
              >
                Adicionar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Fasty;
