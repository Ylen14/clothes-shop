import { Button, Checkbox, Form, Radio, Slider, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  onClearAllFilters,
  onSetFilters,
  ProductFilters,
} from "../../store/ui/uiSlice";
import { useEffect } from "react";
import { RootState } from "../../store/store";

const defaultFilters: ProductFilters = {
  categories: [],
  color: "",
  size: "",
  price: [0, 100],
};

const categories = ["Perfume", "Trousers", "Shoe", "Handbag", "Hat", "Thermos"];
const colors = ["blue", "yellow", "green", "blue-dark"];
const sizes = ["S", "M", "L", "XL", "XXL"];


export const ProductFilter = () => {
  const dispatch = useDispatch();
  const { productFilters } = useSelector((state: RootState) => state.ui);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(productFilters);
  }, [productFilters, form]);

  const handleFilter = (values: ProductFilters) => {
    const filters = {
      categories: values.categories || [],
      color: values.color || "",
      size: values.size || "",
      price: values.price || [0, 100],
    };
    dispatch(onSetFilters(filters));
  };

  const handleReset = () => {
    form.resetFields();
    dispatch(onClearAllFilters());
  };


  return (
    <div className="product-filter">
      <Form
        form={form}
        initialValues={defaultFilters}
        onValuesChange={(_, allValues) => handleFilter(allValues)}
      >
        <div className="filter-section">
          <h3>Categories</h3>
          <Form.Item name="categories">
            <Checkbox.Group>
              <Space direction="vertical">
                {categories.map((category) => (
                  <Checkbox key={category} value={category}>
                    {category}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </div>
        <div className="filter-section">
          <h3>Color</h3>
          <Form.Item name="color">
          <div className="color-options">
            <Radio.Group defaultValue="blue">
              {colors.map((color) => (
                <Radio.Button
                  key={color}
                  value={color}
                  className={`color-circle ${color}`}
                />
              ))}
            </Radio.Group>
          </div>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Size</h3>
          <Form.Item name="size">
          <Radio.Group defaultValue="S" buttonStyle="solid">
            <Space className="size-options">
              {sizes.map((size) => (
                <Radio.Button key={size} value={size} className="size-button">
                  {size}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Price</h3>
          <Form.Item name="price">
          <div className="price-slider">
            <Form.Item name="price">
              <Slider
                range
                min={0}
                max={100}
                defaultValue={[0, 100]}
                tooltip={{
                  formatter: (value) => `$${value}`,
                  placement: "bottom",
                }}
              />
            </Form.Item>
          </div>
          </Form.Item>
        </div>
        <div className="filter-actions">
          <Button onClick={handleReset} type="default" block>
            Reset filters
          </Button>
        </div>
      </Form>
    </div>
  );
};