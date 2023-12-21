import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { FaRegImage, FaRegPlusSquare } from "react-icons/fa";
interface ICar {
  id: string;
  model: string;
  imageUrl: string;
}

interface ILap {
  id: string;
  lapNumber: number;
  time: number;

  idCar: ICar["id"];
  idCarFk: ICar;
}

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onCarInputSubmit = async (data: ICar) => {};

  //File opening
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const filesInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    if (filesInputRef.current) {
      filesInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
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
          style={{ border: "2px solid rgb(32, 116, 212)", borderRadius: "10px" }}
          onClick={() => setDialogOpen(true)}
        >
          <FaRegPlusSquare className="h-6 w-6 mr-3" />
          <div className="mt-0.5">Novo Carro</div>
        </Button>
      </div>

      <div></div>

      <Dialog open={!!dialogOpen} fullWidth maxWidth="md">
        <DialogTitle>Adicionar carro</DialogTitle>
        <DialogContent>
          <form onSubmit={(data) => onCarInputSubmit(data)}>
            <div className="flex justify-end mr-32 py-20 mb-10">
              <div></div>
              <div className="flex flex-col gap-3">
                <TextField label="Modelo" style={{ marginBottom: "5px" }} size="small" placeholder="Modelo" />
                <input ref={filesInputRef} type="file" style={{ display: "none" }} onChange={handleFileChange} />
                <Button
                  onClick={handleFileUploadClick}
                  style={{ textTransform: "capitalize", width: "180px", marginLeft: "20px" }}
                >
                  <FaRegImage className="h-5 w-5 mr-3 mb-1" />
                  <div>Fazer Upload</div>
                </Button>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button style={{ border: "1px solid rgb(32, 116, 212)" }} onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button style={{ color: "white", backgroundColor: "rgb(32, 116, 212)" }}>Adicionar</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
