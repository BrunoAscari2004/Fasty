import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { FaRegImage, FaRegPlusSquare } from "react-icons/fa";
import ICarForm from "../../@types/ICarForm";
//import { IAppDispatch } from "../../store";

const Fasty: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectImage] = useState<File | null>(null);
  const [itemData, setItemData] = useState<ICarForm[]>([]);
  const [isClickedIndex, setIsClickedIndex] = useState<number | null>(null);
  const [dialogFormData, setDialogFormData] = useState<ICarForm | null>(null);

  //const dispatch: IAppDispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const carData: ICarForm = {
      model: formData.get("Modelo") as string,
      imageUrl: "",
    };

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        console.log(base64String);

        localStorage.setItem("selectedImage", base64String);
        localStorage.setItem("carModel", carData.model);

        carData.imageUrl = base64String;
        setSelectImage(null);
        setDialogOpen(false);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setDialogOpen(false);
    }
    console.log(carData.imageUrl);
    console.log(carData.model);
    setItemData((prevItemData) => [...prevItemData, carData]);
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

  const handleClick = (index: number) => {
    setIsClickedIndex(index);
    setDialogFormData(itemData[index]);
    setDialogOpen(true);
    setTimeout(() => {
      setIsClickedIndex(null);
    }, 300);
  };

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

      <div className="mt-10 ml-2">
        <Grid container spacing={2}>
          {itemData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.imageUrl}>
              <Paper
                elevation={3}
                sx={{ p: 0, height: "100%", width: "450px" }}
                onClick={() => handleClick(index)}
                style={{
                  cursor: "pointer",
                  opacity: isClickedIndex === index ? 0.6 : 1,
                  transition: "opacity 0.1s ease",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.imageUrl}
                    alt={item.imageUrl}
                    loading="lazy"
                    style={{
                      width: "200px",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ textAlign: "right", marginLeft: "1rem" }}
                  >
                    {item.model}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>

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
                      width: "350px",
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
                      width: "350px",
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
                <TextField
                  name="Modelo"
                  label="Modelo"
                  size="small"
                  placeholder="Modelo"
                  value={dialogFormData?.model}
                />
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
                  setDialogFormData(null);
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
