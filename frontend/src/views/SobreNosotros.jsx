import { FormControl, Box, TextField, TextareaAutosize, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SobreNosotros() {
  return (
    <div>
      <h2>Contacto</h2>
      <main style={{ padding: "1rem 0" }}>
        <FormControl variant="standard">
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="email" label="Correo electrónico" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="numero" label="Número de teléfono" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="asunto" label="Asunto" variant="standard" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Mensaje"
              style={{ width: 200, height: 60 }}
            />
          </Box>
          <Button variant="text">Enviar</Button>
        </FormControl>
      </main>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Typography>
            Somos una empresa que vende a clientes y pequeñas empresas, tenemos contactos con diferentes distribuidoras
            Nuetros asesores toman los pedidos de nuestros clientes y los entrega en 1 o 2 días hábiles (en la misma ciudad). O lo enviamos por transportadoras confiables como Servientrega ó Interrapidísimo.
            Nuestra prioridad es que nuestros clientes tengan una experiencia de compra satisfactoria.
            Nuestros productos tienen garantía de 30 días (conservando el paquete lo menos roto posible, para nosotros gestionar el cambio con nuestro proveedor)
           Nuestros productos intentamos que sean de la mejor calidad y así poder ofrecerte una experiencia de compra satisfactoria.
          </Typography>

    </div>
  );
}
