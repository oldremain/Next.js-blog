import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePostsContext } from "hooks/useAppContext";
import { useRouter } from "next/router";

import FormControl from "@components/FormControl";
import Input from "@components/FormControl/Input";
import Label from "@components/FormControl/Label";
import Submit from "@components/Buttons/Submit";
import { BiSearch } from "react-icons/bi";

import styles from "./Navbar.module.scss";

const schema = yup
  .object({
    search: yup.string(),
  })
  .required();

const Navbar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setPosts } = usePostsContext();
  const router = useRouter();

  const handleLinkClick = () => {
    setPosts(null);
  };

  const handleFormSubmit = async (data) => {
    try {
      const { data: articles } = await axios.get(
        "http://localhost:5000/api/article/search",
        {
          params: {
            title: data.search,
          },
        }
      );
      setPosts(articles);
      router.push(
        {
          pathname: `/`,
        },
        `/search/?title=${data.search}`,
        { shallow: true }
      );
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link href="/">
            <a className={styles.navigation__link} onClick={handleLinkClick}>
              Next.js | Blog
            </a>
          </Link>
          {router.pathname === "/" && (
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              method="get"
              className={styles.form}
            >
              <FormControl>
                <Label
                  text={"Search"}
                  name={"search"}
                  className={styles.form__label}
                />
                <Input
                  name={"search"}
                  type={"text"}
                  id={"search"}
                  register={register}
                  placeholder="Search post"
                  className={styles.form__input}
                />
                <Submit text={<BiSearch />} className={styles.form__button} />
              </FormControl>
            </form>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
