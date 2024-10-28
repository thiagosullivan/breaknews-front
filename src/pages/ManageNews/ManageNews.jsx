import { useNavigate, useParams } from "react-router-dom";
import { AddNewsContainer } from "./ManageNewsStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchema";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { Button } from "../../components/Button/Button";
import { createNews } from "../../services/postsServices";

export function ManageNews() {
  const { action } = useParams();

  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
  } = useForm({ resolver: zodResolver(newsSchema) });

  const navigate = useNavigate();

  async function registerNewsSubmit(data){
    try {
        await createNews(data);
        navigate("/profile");
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <AddNewsContainer>
      <h2>{action == "add" ? "Adicionar" : "Atualizar"} Notícias</h2>
      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : handleRegisterNews()
        }
      >
        <Input
            type="text"
            placeholder="Titulo"
            name="title"
            register={registerNews}
            value={action !== "add" ? "title" : ""}
        />
        {errorsRegisterNews.title && (
            <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
        )}
        <Input
            type="text"
            placeholder="Link da imagem"
            name="banner"
            register={registerNews}
            value={action !== "add" ? "title" : ""}
        />
        {errorsRegisterNews.banner && (
            <ErrorSpan>{errorsRegisterNews.banner.message}</ErrorSpan>
        )}
        <Input
            type="text"
            placeholder="Texto"
            name="text"
            register={registerNews}
            isInput={false}
            value={action !== "add" ? "title" : ""}
        />
        {errorsRegisterNews.text && (
            <ErrorSpan>{errorsRegisterNews.text.message}</ErrorSpan>
        )}
        <Button
            type="submit"
            text={
                action === "add"
                ? "Adicionar"
                : action === "edit"
                ? "Atualizar"
                : "Apagar"
            }
        />
      </form>
    </AddNewsContainer>
  );
}
