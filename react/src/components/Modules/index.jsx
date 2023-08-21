import { useState } from "react";
import { Grid, Skeleton, Typography } from "@mui/material";

// Component import
import { ContentModule } from "../ContentModule";

// Styles import
import { ModuleContentContainer, Divider, SkeletonWrapper } from "./styles";

function ModuleContent({ isFirsItem, item, handlePopoverOpen, ariaOwns }) {
  const moduleIsDisabled =
    item.imagem_modulo !== "https://i.imgur.com/R7Mp3Pg.png";

  return (
    <Grid
      item
      xs={isFirsItem ? 12 : 6}
      sm={isFirsItem ? 12 : 6}
      md={isFirsItem ? 12 : 6}
      lg={isFirsItem ? 12 : 6}
      aria-label="Ação de um IPO"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <ModuleContentContainer
        aria-owns={ariaOwns}
        aria-haspopup="true"
        type="button"
        onClick={handlePopoverOpen}
        {...(!moduleIsDisabled ? { onClick: handlePopoverOpen } : null)}
        disabled={moduleIsDisabled}
      >
        <img
          src={item.imagem_modulo}
          alt={`Imagem que representa o módulo ${item.nome_modulo}`}
        />
        <p>{item.nome_modulo}</p>
      </ModuleContentContainer>
    </Grid>
  );
}

function ModuleContentLoading() {
  const defaultData = [0, 1, 2];

  return (
    <>
      {defaultData.map((_, index) => {
        const isFirstItem = index === 0;

        return (
          <Grid
            item
            xs={isFirstItem ? 12 : 6}
            sm={isFirstItem ? 12 : 6}
            md={isFirstItem ? 12 : 6}
            lg={isFirstItem ? 12 : 6}
            aria-label="Esboço de uma ação de um IPO"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <SkeletonWrapper>
              <Skeleton
                sx={{ margin: "0.5rem 0", borderRadius: "50%" }}
                variant="rounded"
                width="7.2rem"
                height="7.3rem"
              />
              <Skeleton width="15rem" height="3rem">
                <Typography>.</Typography>
              </Skeleton>
            </SkeletonWrapper>
          </Grid>
        );
      })}
    </>
  );
}
export function Modules({ data, loading }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const contentPopoverIsOpen = Boolean(anchorEl);

  const handlePopoverOpen = (event) => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  const hasData = (section) => data?.[section]?.[0]?.id_modulo && !loading;

  const renderModuleContent = (section) => {
    if (hasData(section)) {
      return data[section].map((item, index) => (
        <ModuleContent
          handlePopoverOpen={handlePopoverOpen}
          isFirsItem={index === 0}
          item={item}
          ariaOwns={contentPopoverIsOpen ? "mouse-over-popover" : undefined}
          key={item.id_modulo}
        />
      ));
    }
    return <ModuleContentLoading />;
  };

  return (
    <>
      {hasData("first") && (
        <>
          {renderModuleContent("first")}
          <Divider />
        </>
      )}

      {hasData("first") && hasData("second") && (
        <>
          {renderModuleContent("second")}
          <Divider />
        </>
      )}

      {hasData("first") && hasData("second") && hasData("third") && (
        <>{renderModuleContent("third")}</>
      )}

      <ContentModule
        open={contentPopoverIsOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
      />
    </>
  );
}
