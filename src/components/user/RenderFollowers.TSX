export const RenderFollowers = ({ user, isLoading }) =>
  !user &&
  !isLoading && (
    <p className="section-friends__followers">
      <span className="section-friends__user-friend">carlitos.perro</span> y 19
      mascotas más siguen esta cuenta
    </p>
);
