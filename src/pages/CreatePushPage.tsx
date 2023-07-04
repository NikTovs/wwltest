import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreatePushHead } from "../components/CreatePushHead";
import styles from "../styles/CreatePush.module.scss";
import CustomInput from "../components/CustomInput";
import { PushFormType } from "../types/createPushFormType";
import CustomSelect from "../components/CustomSelect";
import { languageListOpts } from "../data/listOptions";
import { setValue } from "../redux/formReducer";
import { useSelector, useDispatch } from "react-redux";
import { DateAndTimeController } from "../components/DateAndTimeController";
import { useEffect } from "react";

export const CreatePushPage = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PushFormType>({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const stateForm = useSelector((state: any) => state.form);

  const onSubmit: SubmitHandler<PushFormType> = (data) => {
    dispatch(setValue(data));
  };

  useEffect(() => {
    console.log(stateForm, "VALUES IN STORE");
  }, [stateForm])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <CreatePushHead />
      <div className={styles.inputContainer}>
        <Controller
          name="pushName"
          control={control}
          rules={{
            required: "Обязательное поле",
            maxLength: {
              value: 50,
              message: "Максимальная длина поля 50 символов",
            },
          }}
          render={({ field }) => (
            <>
              <CustomInput
                placeholder="Введите название нового пуша"
                labelName="Название пуша"
                id="input2"
                onChange={(value: string) => field.onChange(value)}
              />
              {errors.pushName && (
                <span style={{ color: "red" }}>
                  {errors.pushName.message as string}
                </span>
              )}
            </>
          )}
        />
      </div>

      <div className={styles.divider}></div>
      <div className={styles.inputsContainer}>
        <div className={styles.inputsLeftContainer}>
          <div className={styles.inputContainer}>
            <Controller
              name="textTitle"
              control={control}
              rules={{
                required: "Обязательное поле",
                maxLength: {
                  value: 50,
                  message: "Максимальная длина поля 50 символов",
                },
              }}
              render={({ field }) => (
                <>
                  <CustomInput
                    placeholder="Введите заголовок максимально 50 символов"
                    labelName="Заголовок сообщения"
                    id="input2"
                    onChange={(value: string) => field.onChange(value)}
                  />
                  {errors.textTitle && (
                    <span style={{ color: "red" }}>
                      {errors.textTitle.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.inputContainer}>
            <Controller
              name="mainText"
              control={control}
              rules={{
                required: "Обязательное поле",
                maxLength: {
                  value: 50,
                  message: "Максимальная длина поля 150 символов",
                },
              }}
              render={({ field }) => (
                <>
                  <CustomInput
                    placeholder="Введите текст максимально 150 символов"
                    labelName="Текст сообщения"
                    id="input3"
                    isTextArea
                    value={field.value}
                    onChange={(value: string) => field.onChange(value)}
                  />
                  {errors.mainText && (
                    <span style={{ color: "red" }}>
                      {errors.mainText.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.inputContainer}>
            <Controller
              name="language"
              control={control}
              rules={{
                required: "Обязательное поле",
              }}
              render={({ field }) => (
                <>
                  <CustomSelect
                    placeholder="Выберите пункт"
                    labelName="Исходный язык"
                    id="input4"
                    list={languageListOpts}
                    infoText=""
                    onChange={(value: string) => field.onChange(value)}
                  />
                  {errors.language && (
                    <span style={{ color: "red" }}>
                      {errors.language.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className={styles.multipleInputsContainer}>
            <div className={styles.inputContainer}>
              <Controller
                name="iconLink"
                control={control}
                rules={{
                  required: "Обязательное поле",
                }}
                render={({ field }) => (
                  <>
                    <CustomInput
                      labelName="Иконка"
                      placeholder="Введите ссылку на иконку"
                      subLabel="(опцильнально)"
                      id="input6"
                      onChange={(value: string) => {
                        field.onChange(value);
                      }}
                    />
                    {errors.iconLink && (
                      <span style={{ color: "red" }}>
                        {errors.iconLink.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className={styles.inputContainer}>
              <Controller
                name="imgLink"
                control={control}
                rules={{
                  required: "Обязательное поле",
                }}
                render={({ field }) => (
                  <>
                    <CustomInput
                      labelName="Изображение"
                      placeholder="Введите ссылку на изображение"
                      subLabel="(опцильнально)"
                      id="input7"
                      onChange={(value: string) => {
                        field.onChange(value);
                      }}
                    />
                    {errors.imgLink && (
                      <span style={{ color: "red" }}>
                        {errors.imgLink.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>
        <div className={styles.inputsRightContainer}>
          <div className={styles.inputContainer}>
            <Controller
              name="messageType"
              control={control}
              rules={{
                required: "Обязательное поле",
              }}
              render={({ field }) => (
                <>
                  <CustomSelect
                    placeholder="Выберите пункт"
                    labelName="Выберите тип рассылки"
                    id="input8"
                    list={["По дате", "другое"]}
                    infoText=""
                    onChange={(value: string) => field.onChange(value)}
                  />
                  {errors.messageType && (
                    <span style={{ color: "red" }}>
                      {errors.messageType.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          <DateAndTimeController  />
          

          {/* audience реалізован звичайним селектом, 
          тому що тут були 2 шляхи реалізації. 
          1. Написати кастомний компонент.
          2. Юзати mui та змінювати стилі під потреба шаблону.
          Оби два шляхи затратні по часу і не продемонструють нічого крім мого
           розуміння стилей, тому я вирішив заощадити час.
           Також не зроблен розділ з сігментацією, тому що він має ідентично логіку з
           секцією типу розсилки.
           Сподіваюсь на розуміння)
          */}
          <div className={styles.inputContainer}>
            <Controller
              name="audience"
              control={control}
              rules={{
                required: "Обязательное поле",
              }}
              render={({ field }) => (
                <>
                  <CustomSelect
                    placeholder="Выберите пункт"
                    labelName="Аудитория"
                    id="input9"
                    list={["tag01", "tag02", "tag03", "tag04"]}
                    infoText=""
                    onChange={(value: string) => field.onChange(value)}
                  />
                  {errors.audience && (
                    <span style={{ color: "red" }}>
                      {errors.audience.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Отмена</button>
        <button
          type="submit"
          className={`${styles.button} ${styles.buttonCreate}`}
        >
          Создать Пуш
        </button>
      </div>
    </form>
  );
};
