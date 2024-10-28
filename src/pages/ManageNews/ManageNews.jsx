import { useNavigate, useParams } from "react-router-dom";
import { AddNewsContainer } from "./ManageNewsStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchema";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { Button } from "../../components/Button/Button";
import {
  createNews,
  deleteNews,
  editNews,
  getNewsById,
} from "../../services/postsServices";
import { useEffect } from "react";

export function ManageNews() {
  const { action, id } = useParams();
  const navigate = useNavigate();
  console.log(id, 'ID PARAMS')

  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
    setValue,
  } = useForm({ resolver: zodResolver(newsSchema) });

  async function registerNewsSubmit(data) {
    try {
      await createNews(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function editNewsSubmit(data) {
    console.log(id, 'EDIT ID')
    try {
      console.log('TRY')
      await editNews(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNewsFunction(id) {
    console.log(id, 'ENTROU')
    try {
      await deleteNews(id);
      console.log('TRY')
      navigate("/profile");
      console.log('DELETADO')
    } catch (error) {
      console.log(error);
    }
  }

  async function getSpecificNews(id) {
    try {
      const { data } = await getNewsById(id);
      setValue("title", data.news.title);
      setValue("banner", data.news.banner);
      setValue("text", data.news.text);
      // console.log(data, "VALUE");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (action === "edit" || action) {
      getSpecificNews(id);
    }
  }, []);

  return (
    <AddNewsContainer>
      <h2>{action === "add" ? "Adicionar" : "Atualizar"} Notícias</h2>
      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : handleRegisterNews(editNewsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Titulo"
          name="title"
          register={registerNews}
        />
        {errorsRegisterNews.title && (
          <ErrorSpan>{errorsRegisterNews.title.message}</ErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Link da imagem"
          name="banner"
          register={registerNews}
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
          style={{ minWidth: "135px" }}
        />
        {action === "edit" && (
          <Button
            text="Apagar"
            type="button"
            style={{
              minWidth: "135px",
              backgroundColor: "#f73636"
            }}
            onClick={() => deleteNewsFunction(id)}
          />
        )}
      </form>      
    </AddNewsContainer>
  );
}
