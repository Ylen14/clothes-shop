
import {  Checkbox, Radio, Slider, Space } from 'antd';
import "../../styles/components/sidebar-de-filtros/sidebar-de-filtro.css";

export const ProductFilter = () => {
  
  return (
    <div className="product-filter">
      <div className="filter-section">
        <h3>Categories</h3>
        <Checkbox.Group className="category-group">
          <Space direction="vertical" className="full-width">
            <Checkbox value="Perfume">Perfume</Checkbox>
            <Checkbox value="Trousers">Trousers</Checkbox>
            <Checkbox value="Shoe">Shoe</Checkbox>
            <Checkbox value="Handbag">Handbag</Checkbox>
            <Checkbox value="Hat">Hat</Checkbox>
            <Checkbox value="Thermos">Thermos</Checkbox>
          </Space>
        </Checkbox.Group>
      </div>

      <div className="filter-section">
        <h3>Color</h3>
        <div className="color-options">
          <Radio.Group defaultValue="blue">
            <Radio.Button value="blue" className="color-circle blue" />
            <Radio.Button value="yellow" className="color-circle yellow" />
            <Radio.Button value="green" className="color-circle green" />
            <Radio.Button value="blue-dark" className="color-circle blue-dark" />
          </Radio.Group>
        </div>
      </div>

      <div className="filter-section">
        <h3>Size</h3>
        <Radio.Group defaultValue="S" buttonStyle="solid">
          <Space className="size-options">
            <Radio.Button value="S" className="size-button">S</Radio.Button>
            <Radio.Button value="M" className="size-button">M</Radio.Button>
            <Radio.Button value="L" className="size-button">L</Radio.Button>
            <Radio.Button value="XL" className="size-button">XL</Radio.Button>
            <Radio.Button value="XXL" className="size-button">XXL</Radio.Button>
          </Space>
        </Radio.Group>
      </div>

      <div className="filter-section">
        <h3>Price</h3>
        <div className="price-slider">
          <Slider 
            range 
            min={0}
            max={1000}
            defaultValue={[100, 500]}
            tooltip={{
              formatter: (value) => `$${value}`,
              placement: 'bottom'
            }}
          />
        </div>
      </div>
    </div>
  );
};