import React, { useState } from 'react';
import {
  Button,
  Rate,
  Tag,
  Typography,
  Divider,
  Row,
  Col,
  InputNumber,
} from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cartSlice';

import blackShirt from '../../assets/black.png';
import '../../styles/components/product-details/productdetails.css';

const { Title, Text } = Typography;

interface ProductDetailsProps {
  className?: string;
  style?: React.CSSProperties;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ className = '', style }) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState<string>('#A3BEF8');
  const [size, setSize] = useState<string>('S');
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        name: 'Raw Black T-Shirt Lineup',
        color,
        size,
        quantity,
        price: 75,
      })
    );
  };

  const colorOptions = ['#A3BEF8', '#FFD58A', '#83B18B'];

  return (
    <div
      className={`product-details-container ${className}`}
      style={style}
    >
      <Row gutter={32} className="product-details">
        <Col xs={24} md={12}>
          <div className="product-image-background">
            <div className="product-image">
              <img
                src={blackShirt}
                alt="Raw Black T-Shirt"
                className="product-image-img"
              />
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Title level={4}>Raw Black T-Shirt Lineup</Title>
          <Rate disabled defaultValue={4.2} />
          <Text type="secondary">(54 Reviews)</Text>
          <Tag color="success">IN STOCK</Tag>

          <Title level={4} className="price">$75.00</Title>

          <Divider />

          <Text strong>Available Colors</Text>
          <div className="color-options">
            {colorOptions.map((clr) => (
              <Button
                key={clr}
                shape="circle"
                style={{
                  backgroundColor: clr,
                  border: color === clr ? '2px solid black' : 'none',
                  marginRight: 8,
                }}
                onClick={() => setColor(clr)}
              />
            ))}
          </div>

          <Text strong>Select Size</Text>
          <div className="size-options">
            {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
              <Button
                key={sz}
                type={size === sz ? 'primary' : 'default'}
                style={{ marginRight: 8 }}
                onClick={() => setSize(sz)}
              >
                {sz}
              </Button>
            ))}
          </div>

          <Text strong>Quantity</Text>
          <div className="quantity-options">
            <Button
              icon={<MinusOutlined />}
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            />
            <InputNumber
              min={1}
              value={quantity}
              onChange={(value) => setQuantity(value || 1)}
              style={{ margin: '0 10px', width: 60 }}
            />
            <Button
              icon={<PlusOutlined />}
              onClick={() => setQuantity(quantity + 1)}
            />
          </div>

          <Button onClick={handleAddToCart} className="add-to-cart-button">
            Add to cart
          </Button>

          <Text type="secondary" className="shipping-info">
            — FREE SHIPPING ON ORDERS $100+
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
