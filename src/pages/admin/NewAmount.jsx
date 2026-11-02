import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useTransactions from "../../shared/hooks/useTransactions";
import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";

const schema = z.object({
  amount: z.number().positive("El monto debe ser mayor a cero"),
});

const NewAmount = () => {
  const { id } = useParams(); 

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: "",
    },
  });

  const { updateTransaction } = useTransactions();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await updateTransaction(id, data);

    if (result?.error) {
      toast.error("No se pudo actualizar el monto depósito.");
    } else {
      toast.success("Depósito actualizado con éxito.");
      navigate(-1); 
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 sm:mt-10 bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-white mb-4">Cambiar Monto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm text-white mb-1">Monto</label>
          <input
            type="number"
            step="0.01"
            {...register("amount", { valueAsNumber: true })}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.amount && (
            <p className="text-red-400 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="flex-1 justify-center"
          >
            Actualizar Depósito
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex-1 justify-center"
          >
            Volver al Inicio
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewAmount;
