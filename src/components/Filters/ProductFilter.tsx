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

<<<<<<< HEAD
    const filtersMap = values.categories.map((category: string) => ({
      name: 'Category', value: category
    }))
    dispatch(onSetFilters(filtersMap))
  }
=======
  const handleReset = () => {
    form.resetFields();
    dispatch(onClearAllFilters());
  };
>>>>>>> 199db46ea3f128ede938e99e2d57d5a8e9162423


  return (
    <div className="product-filter">
<<<<<<< HEAD
      <Form onValuesChange={(values) => handleFilter(values)}>
=======
      <Form
        form={form}
        initialValues={defaultFilters}
        onValuesChange={(_, allValues) => handleFilter(allValues)}
      >
>>>>>>> 199db46ea3f128ede938e99e2d57d5a8e9162423
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
<<<<<<< HEAD

        
=======
>>>>>>> 199db46ea3f128ede938e99e2d57d5a8e9162423
        <div className="filter-section">
          <h3>Color</h3>
          <Form.Item name="color">
          <div className="color-options">
<<<<<<< HEAD
            <Radio.Group defaultValue="blue">
              {colors.map((color) => (
                <Radio.Button
                  key={color}
                  value={color}
                  className={`color-circle ${color}`}
                />
              ))}
            </Radio.Group>
=======
            <Form.Item name="color">
              <Radio.Group>
                <Radio.Button value="blue" className="color-circle blue" />
                <Radio.Button value="yellow" className="color-circle yellow" />
                <Radio.Button value="green" className="color-circle green" />
                <Radio.Button
                  value="blue-dark"
                  className="color-circle blue-dark"
                />
              </Radio.Group>
            </Form.Item>
>>>>>>> 199db46ea3f128ede938e99e2d57d5a8e9162423
          </div>
          </Form.Item>
        </div>

        <div className="filter-section">
          <h3>Size</h3>
          <Form.Item name="size">
<<<<<<< HEAD
          <Radio.Group defaultValue="S" buttonStyle="solid">
            <Space className="size-options">
              {sizes.map((size) => (
                <Radio.Button key={size} value={size} className="size-button">
                  {size}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
=======
            <Radio.Group buttonStyle="solid">
              <Space className="size-options">
                <Radio.Button value="S" className="size-button">
                  S
                </Radio.Button>
                <Radio.Button value="M" className="size-button">
                  M
                </Radio.Button>
                <Radio.Button value="L" className="size-button">
                  L
                </Radio.Button>
                <Radio.Button value="XL" className="size-button">
                  XL
                </Radio.Button>
                <Radio.Button value="XXL" className="size-button">
                  XXL
                </Radio.Button>
              </Space>
            </Radio.Group>
>>>>>>> 199db46ea3f128ede938e99e2d57d5a8e9162423
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