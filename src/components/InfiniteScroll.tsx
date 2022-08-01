import { useRef, useCallback, FC } from 'react';

interface IInfiniteScroll {
  actionData: () => void;
  component: FC<any>;
  data: any[];
  loading: boolean;
}
export const InfiniteScroll = ({
  component: Component,
  data,
  loading,
  actionData,
}: IInfiniteScroll) => {
  const observer = useRef<any>();
  const lasElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current = observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          actionData();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <>
      {data.map((item, index) =>
        data.length === index + 1 ? (
          <div key={item.id} ref={lasElement}>
            <Component {...item} />
          </div>
        ) : (
          <Component key={item.id} {...item} />
        )
      )}
    </>
  );
};
